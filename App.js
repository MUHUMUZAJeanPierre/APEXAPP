import React from 'react';
import Splash from './src/components/SplashScreen/Splash';
import StackNavigator from './src/navigation/StackNavigation/StackNavigation';
import Detail from './src/screens/Detail';
import DrawerNavigator from './src/navigation/Drawer/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import './src/utils/i18n'


export default function App() {
  return (
    <>
    <GestureHandlerRootView >

    <NavigationContainer>

      <DrawerNavigator />
    </NavigationContainer>
    </GestureHandlerRootView>
      {/* <StackNavigator /> */}
      {/* <Splash /> */}
      {/* <Detail /> */}
    </>
  );
}
