import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/screens/SplashScreen';
import { AppNavigation } from './src/navigate/AppNavigation';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react';



const App = () => {


  return (
    <AppState>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={<SplashScreen />} persistor={persistor}>
            <AppNavigation />
          </PersistGate>
        </Provider>
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
