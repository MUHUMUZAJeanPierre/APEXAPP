import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ForgotPassword from "../../screens/ForgotPassword";
import EditProfile from "../../screens/EditProfile";
import SignUp from "../../components/SignUp/SignUp";
import LoginScreen from "../../screens/LoginScreen";
import Detail from "../../screens/Detail";
import MainNavigator from "../BottomNavigation/Bottom";
import AdminTabBottom from "../BottomNavigation/AdminTabBottom";
import Chat from "../../screens/Chat";
import AdminContentPage from "../../screens/AdminContentPage";
import Splash from "../../components/SplashScreen/Splash";
import OnBoarding from '../../components/OnBoarding'
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false }} name="Splash" component={Splash} />
        <Stack.Screen options={{headerShown: false }} name="OnBoarding" component={OnBoarding} />
        <Stack.Screen options={{headerShown: false }} name="SignUp" component={SignUp} />
        <Stack.Screen options={{headerShown:false}} name="login" component={LoginScreen} />
        <Stack.Screen options={{headerShown:false}} name="MyTab" component={MainNavigator} />
        <Stack.Screen options={{headerShown:false}} name="AdminTab" component={AdminTabBottom} />
        <Stack.Screen options={{headerShown:false}} name="Detail" component={Detail} />
        <Stack.Screen options={{headerShown:false}} name="AdminContentPage" component={AdminContentPage} />
        <Stack.Screen options={{headerShown:false}} name="Chat" component={Chat} />
        <Stack.Screen options={{headerShown:false}} name="EditProfile" component={EditProfile} />
        <Stack.Screen options={{headerShown:false}} name="forgotPassword" component={ForgotPassword} />

      </Stack.Navigator>
     </NavigationContainer>
  );
}

export default StackNavigator;