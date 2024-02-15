import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/colors';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';


export const ThemeComponent = () => {
    const { theme, setDarkTheme, setLightTheme } = useContext(ThemeContext)
    const language = useSelector((state: RootState) => state.language);
    const title = (language === 'Spanish') ? 'Seleccione tema de aplicacion:' : (language === 'English') ? 'Select application theme:' : 'Selecione o tema de aplicação:'

    return (
        <View>
            <Text style={{color: 'black', fontSize:18}}> {title} </Text>
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
