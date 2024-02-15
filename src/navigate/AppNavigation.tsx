import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import { TheThreeFactors } from '../screens/TheThreeFactors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BooksOfTheVM } from '../screens/BooksOfTheVM';
import { ChatScreen } from '../screens/ChatScreen';
import { ConfigScreen } from '../screens/ConfigScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { DailyPractices } from '../screens/DailyPractices';
import { GnosticMusicScreen } from '../screens/GnosticMusicScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { RegisterScreen } from '../screens/RegisterScreen';
import { BooksView } from '../screens/BooksView';
import { ProtectivePractices } from '../screens/ProtectivePractices';
import { TheThirdState } from '../screens/TheThirdState';
import { IntroductionToGnosis } from '../screens/IntroductionToGnosis';


type RootStackParamList = {
    Home: undefined;
    LoginScreen: undefined;
    TheThreeFactors: undefined;
    BooksOfTheVM: undefined;
    SlidesScreen: undefined;
    DailyScreen: undefined;
    GnosticMusicScreen: undefined;
    Splash: undefined;
    HomeStack: undefined;
    RegisterScreen: undefined;
    BooksView: {url:string}
    ProtectivePractices: undefined;
    TheThirdState: undefined;
    IntroductionToGnosis: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export const AppNavigation = () => {

    const { theme: { colors } } = useContext(ThemeContext)
    const [isAppReady, setAppReady] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAppReady(true);
        }, 1000);
    }, []);

    if (!isAppReady) {
        return (
            <SplashScreen />
        );
    }

    return (

        <NavigationContainer >

            <Tab.Navigator
                screenOptions={{ headerShown: false, title: '' }}


            >
                <Tab.Screen name='Stack' component={StackNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name="home-outline" size={focused ? 35 : 30} color={focused ? colors.border : colors.primary} />
                        ),
                        tabBarStyle: { backgroundColor: colors.background }
                    }}
                />
                <Tab.Screen name='Chat' component={ChatScreen}

                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name="chatbubbles-outline" size={focused ? 35 : 30} color={focused ? colors.border : colors.primary} />
                        ),
                        tabBarStyle: { backgroundColor: colors.background }
                    }}

                />
                <Tab.Screen name='Configurations' component={ConfigScreen}

                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name="settings-outline" size={focused ? 35 : 30} color={focused ? colors.border : colors.primary} />
                        ),
                        tabBarStyle: { backgroundColor: colors.background }
                    }}
                />
                {/* Agrega otras pestañas según sea necesario */}
            </Tab.Navigator>

        </NavigationContainer>

    );
}

export const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeStack' component={HomeStack} />
            {/* Agrega otras pantallas en el Stack según sea necesario */}
        </Stack.Navigator>
    );
}

export const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='TheThreeFactors' component={TheThreeFactors} />
            <Stack.Screen name='BooksOfTheVM' component={BooksOfTheVM} />
            <Stack.Screen name='SlidesScreen' component={SlidesScreen} />
            <Stack.Screen name='DailyScreen' component={DailyPractices} />
            <Stack.Screen name='GnosticMusicScreen' component={GnosticMusicScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
            <Stack.Screen name='BooksView' component={BooksView} />
            <Stack.Screen name='ProtectivePractices' component={ProtectivePractices} />
            <Stack.Screen name= 'TheThirdState' component={TheThirdState} />
            <Stack.Screen name='IntroductionToGnosis' component={IntroductionToGnosis} />
        </Stack.Navigator>
    );
}

