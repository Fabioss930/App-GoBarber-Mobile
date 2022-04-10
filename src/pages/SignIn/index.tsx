import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ActivityIndicator,
  Alert,
  ScrollView,
  TextInput,
} from "react-native";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import getValidationErrors from "../../utils/getValidationErrors";
import Icon from "react-native-vector-icons/Feather";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logoImg from "../../assets/logo.png";

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
  Loading,
} from "./styles";

interface SignInData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const handleSignIn = useCallback(async (data: SignInData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email obriagatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().required("Senha obrigatória"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // await signIn({
      //   email: data.email,
      //   password: data.password,
      // });
      // history.push("/dashboard");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        return;
      }
      Alert.alert(
        "Erro na autenticação",
        "Ocorreu um erro ao fazer o login, cheque as credenciais."
      );
    }
  }, []);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <Title>Faça seu login</Title>

            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                autoCapitalize="none"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
            </Form>
            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Entrar
            </Button>

            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate("SignUp")}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
