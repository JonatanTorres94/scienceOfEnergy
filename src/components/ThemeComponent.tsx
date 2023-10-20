import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/colors';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ThemeComponent = () => {
    const { theme, setDarkTheme, setLightTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        if (theme.currentTheme === 'light') {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    };


    return (
        <View>
            <Text style={{color: 'black', fontSize:16}}>Seleccione tema de aplicacion:</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: '10%' }}>

                <TouchableOpacity
                    onPress={setDarkTheme}
                    style={{
                        backgroundColor: theme.currentTheme === 'dark' ? colors.blueLe : 'lightgray',
                        width: 130,
                        height: 30,
                        borderRadius: 30,
                        alignItems: 'center',
                    }}
                    activeOpacity={0.7}
                >
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 20
                    }}>Dark Theme</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={setLightTheme}
                    style={{
                        backgroundColor: theme.currentTheme === 'light' ? colors.blueLe : 'lightgray',
                        width: 130,
                        height: 30,
                        borderRadius: 30,
                        alignItems: 'center',
                    }}
                    activeOpacity={0.7}
                >
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 20
                    }}>Light Theme</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
