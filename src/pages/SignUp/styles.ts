import styled from "styled-components/native";
import { Platform } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === "android" ? 168 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: "RobotoSlab-Medium";
  margin: 64px 0 24px;
`;

export const BackToSign = styled.TouchableOpacity`
  position: absolute;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  left: 0;
  bottom: 0;
  right: 0;

  padding: 18px 0 ${18 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const BackToSignText = styled.Text`
  color: #fff;
  font-family: "RobotoSlap-Regular";
  margin-left: 16px;
  font-size: 16px;
`;
