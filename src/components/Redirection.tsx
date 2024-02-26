import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import Icon from 'react-native-vector-icons/Ionicons';


export const Redirection = () => {

    const { theme: { colors } } = useContext(ThemeContext)
    const language = useSelector((state: RootState) => state.language);
    const handlePress = (videoUrl = '') => {
        Linking.openURL(videoUrl);
    };

    const textEn= 'You can see a subtitled video of each factor by clicking on the following links:'
    const textPr = 'Você pode ver um vídeo legendado de cada fator clicando nos seguintes links:'



    return (
        <View style={{ marginVertical: 20 }}>
            <Text style={{ fontSize: 18, color: colors.globalText, marginBottom: 10 }}>
                {(language === 'English') ? textEn : textPr}
            </Text>

            <View style={{ marginHorizontal: '10%' }}>
                <TouchableOpacity onPress={() => handlePress('https://www.youtube.com/watch?v=RErUyOhsGQs&ab_channel=CienciadelEnergismo%28Gnosis%29')} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                    <Icon name='videocam-outline' size={25} color={colors.primary} />
                    <Text style={{ color: colors.titleText, marginLeft: 5, fontSize: 18 }}>
                        {(language === 'English') ? 'First Factor' : ' Primeiro Fator'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('https://www.youtube.com/watch?v=xjQhUhHGzCY&ab_channel=CienciadelEnergismo%28Gnosis%29')} style={{ flexDirection: 'row', alignContent: 'center', marginBottom: 5 }} >
                    <Icon name='videocam-outline' size={25} color={colors.primary} />
                    <Text style={{ color: colors.titleText, marginLeft: 5, fontSize: 18 }}> {(language === 'English') ? 'Second Factor' : 'Segundo Fator'} </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('https://www.youtube.com/watch?v=dRJMKN0KJZM&ab_channel=CienciadelEnergismo%28Gnosis%29')} style={{ flexDirection: 'row', alignContent: 'center', marginBottom: 5 }}>
                    <Icon name='videocam-outline' size={25} color={colors.primary} />
                    <Text style={{ color: colors.titleText, marginLeft: 5, fontSize: 18 }}> {(language === 'English') ? 'Third Factor' : 'Terceiro Fator'} </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
