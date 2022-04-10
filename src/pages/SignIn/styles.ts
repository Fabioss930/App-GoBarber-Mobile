import styled from "styled-components/native";
import { Platform } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === "android" ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: "RobotoSlab-Medium";
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 16px;
`;
export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: "RobotoSlap-Regular";
`;
export const CreateAccountButton = styled.TouchableOpacity`
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;

  /* border-top-width: 1px; */
  padding: 18px 0 ${18 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const CreateAccountButtonText = styled.Text`
  color: #ff9000;
  font-family: "RobotoSlap-Regular";
  margin-left: 16px;
  font-size: 16px;
`;

export const Loading = styled.View`
  width: 100%;
  height: 100%;
  background-color: "#312e38";
  justify-content: center;
  align-items: center;
`;
