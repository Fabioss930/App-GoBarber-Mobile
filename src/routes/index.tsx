import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PageTest from "../pages/PageTest";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#312e38" },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="PageTest" component={PageTest} />
  </Auth.Navigator>
);

export default AuthRoutes;
