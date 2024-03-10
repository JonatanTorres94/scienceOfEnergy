import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { GoBack } from '../components/GoBack';
import { HeaderText } from '../components/HeaderText';
import { textData, textDataEnglish, textDataPortuguese } from '../data/textData';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import Icon from 'react-native-vector-icons/Ionicons';
import { OnlyVideo } from '../components/OnlyVideo';
import { Redirection } from '../components/Redirection';

export const TheThreeFactors = () => {

    const { theme: { colors } } = useContext(ThemeContext)
    const language = useSelector((state: RootState) => state.language);
    const [showVideoIndex, setShowVideoIndex] = useState<number | null>();

    const toggleVideoView = (index: number) => {
        setShowVideoIndex(showVideoIndex == index ? null : index);
    };

    const handlePress = () => {
        // URL del canal de Telegram al que se desea redirigir
        const youtubeButton = 'https://youtube.com/watch?v=H5XK6iYRj_k&ab_channel=CienciadelEnergismo%28Gnosis%29';

        // Abre el enlace en la aplicación de navegador predeterminada
        Linking.openURL(youtubeButton);
    };


    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <GoBack />
            <HeaderText title={
                language === 'Spanish' ? 'Los 3 Factores' :
                    language === 'English' ? 'The 3 Factors' :
                        language === 'Portuguese' ? 'Os 3 Fatores' :
                            ""
            } />

            <ScrollView contentContainerStyle={styles.contentContainer}>
                {language === 'Spanish' ? (
                    textData.map((item, index) => (
                        <View key={index}>
                            {item.subtitle ? <Text style={{ ...styles.subtitle, color: colors.titleText }}>{item.subtitle}</Text> : null}
                            <Text style={{ ...styles.text, color: colors.globalText }}>{item.text}</Text>
                            <TouchableOpacity onPress={() => toggleVideoView(index)} style={{ alignSelf: 'center' }}>
                                <Icon name='videocam-outline' size={48} color={colors.primary} />
                            </TouchableOpacity>
                            {showVideoIndex == index && <OnlyVideo url={item.videoUrl} />}
                        </View>
                    ))
                ) : language === 'English' ? (
                    textDataEnglish.map((item, index) => (
                        <View key={index}>
                            {item.subtitle ? <Text style={{ ...styles.subtitle, color: colors.titleText }}>{item.subtitle}</Text> : null}
                            <Text style={{ ...styles.text, color: colors.globalText }}>{item.text}</Text>
                        </View>
                    ))

                ) : language === 'Portuguese' ? (
                    textDataPortuguese.map((item, index) => (
                        <View key={index}>
                            {item.subtitle ? <Text style={{ ...styles.subtitle, color: colors.titleText }}>{item.subtitle}</Text> : null}
                            <Text style={{ ...styles.text, color: colors.globalText }}>{item.text}</Text>
                        </View>
                    ))
                ) : (
                    <Text>No se encontraron datos para el idioma seleccionado.</Text>
                )}

                <View>
                    {
                        (language === 'English') ?
                            <Redirection  />
                            : (language === 'Portuguese') ?
                                <Redirection />
                                : ''
                    }
                </View>


            </ScrollView>





        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    contentContainer: {
        flexGrow: 1,
    },
    text: {
        marginTop: 20,
        fontSize: 17,
        lineHeight: 24,
    },
    subtitle: {
        marginTop: 20,
        fontSize: 20,
        lineHeight: 35,
    }
});


