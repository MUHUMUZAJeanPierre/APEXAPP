import React from 'react';
import Splash from './src/components/SplashScreen/Splash';
import StackNavigator from './src/navigation/StackNavigation/StackNavigation';
import Detail from './src/screens/Detail';


export default function App() {
  return (
    <>
      <StackNavigator />
      {/* <Splash /> */}
      {/* <Detail /> */}
    </>
  );
}
