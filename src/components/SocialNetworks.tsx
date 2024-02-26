import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import Icon from 'react-native-vector-icons/Ionicons';


export const SocialNetworks = () => {


    const { theme: { colors } } = useContext(ThemeContext)
    const language = useSelector((state: RootState) => state.language);
    const handlePress = (videoUrl = '') => {
        Linking.openURL(videoUrl);
    };

    const text = 'Para acceder a las redes de la ciencia del energismo, simplemente toca los iconos correspondientes a continuación:'
    const textEn = 'To access the Energism Science networks, simply tap the corresponding icons below:'
    const textPr = 'Para acessar as redes da Energism Science, basta tocar nos ícones correspondentes abaixo:'



    return (
        <View style={{  marginVertical: 20 }}>

            <Text style={{ fontSize: 18, color: colors.globalText, marginBottom: 15, marginHorizontal:5 }}>
                {(language === 'English') ? textEn : (language === 'Spanish') ? text : textPr}
            </Text>

            <View style={{ marginHorizontal: '5%' }}>

                <TouchableOpacity
                    onPress={() => handlePress('https://www.youtube.com/@cienciadelenergismo')}
                    style={{ flexDirection: 'row', alignContent: 'center', marginBottom: 10 }} >
                    <Icon name='logo-youtube' size={35} color={colors.primary} />
                    <Text style={{ color: colors.titleText, marginLeft: 5, fontSize: 18 }}>
                        YouTube
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => handlePress('https://www.facebook.com/cienciadelenergismo')}
                    style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Icon name='logo-facebook' size={35} color={colors.primary} />
                    <Text style={{ color: colors.titleText, marginLeft: 5, fontSize: 18 }}>
                        Facebook
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handlePress('https://www.instagram.com/gnosiscienciadelenergismo/')}
                    style={{ flexDirection: 'row', alignContent: 'center', marginBottom: 10 }} >
                    <Icon name='logo-instagram' size={35} color={colors.primary} />
                    <Text style={{ color: colors.titleText, marginLeft: 5, fontSize: 18 }}>
                        Instagram
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handlePress('https://www.tiktok.com/@cienciaenergismo_oficial?lang=es')}
                    style={{ flexDirection: 'row', alignContent: 'center', marginBottom: 10 }}>
                    <Icon name='logo-tiktok' size={35} color={colors.primary} />
                    <Text style={{ color: colors.titleText, marginLeft: 5, fontSize: 18 }}>
                        TikTok
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
