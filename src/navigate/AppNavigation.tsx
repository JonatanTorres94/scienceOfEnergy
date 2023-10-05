import React, { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import { TheThreeFactors } from '../screens/TheThreeFactors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';
import { BooksOfTheVM } from '../screens/BooksOfTheVM';
import {ChatScreen} from '../screens/ChatScreen';
import { ConfigScreen } from '../screens/ConfigScreen';

// ... (otros componentes e importaciones)

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
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
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false, title: '' }}>
                <Tab.Screen name='Stack' component={StackNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name="home-outline" size={focused ? 35 : 30} color={focused ? colors.blueLe : colors.primary} />
                        )
                    }}
                />
                <Tab.Screen name='Chat' component={ChatScreen}

                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name="chatbubbles-outline" size={focused ? 35 : 30} color={focused ? colors.blueLe : colors.primary} />
                        )
                    }}
                />
                <Tab.Screen name='Configurations' component={ConfigScreen}

                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name="settings-outline" size={focused ? 35 : 30} color={focused ? colors.blueLe : colors.primary} />
                        )
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
        </Stack.Navigator>
    );
}

