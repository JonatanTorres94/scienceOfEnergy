
import React from 'react';
import { SafeAreaView } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/screens/SplashScreen';
import { AppNavigation } from './src/navigate/AppNavigation';



const  App = () => {


  return (
    <SafeAreaProvider>
      <AppNavigation/>
    </SafeAreaProvider>
  );
}


export default App;
