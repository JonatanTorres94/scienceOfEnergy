
import React from 'react';
import { SafeAreaView } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/screens/SplashScreen';
import { AppNavigation } from './src/navigate/AppNavigation';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';


const App = () => {


  return (
    <AppState>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </AppState>
  );
}

const AppState = ({ children }: any) => {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}


export default App;
