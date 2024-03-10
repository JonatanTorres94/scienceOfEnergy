import React, { useContext, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import { HeaderText } from '../components/HeaderText';
import { GoBack } from '../components/GoBack';
import { TextTranslator, textIntroductionData, textIntroductionDataEnglish, textIntroductionDataPortu } from '../data/textData';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { SocialNetworks } from '../components/SocialNetworks';
import { ItemSeparator } from '../components/ItemSeparator';

export const IntroductionToGnosis = () => {
    const language = useSelector((state: RootState) => state.language);

    const { theme: { colors } } = useContext(ThemeContext)



    return (
        <View style={{ flex: 1, backgroundColor: colors.background, padding: 10 }}>
            <GoBack />
            <HeaderText title={
                language === 'Spanish' ? 'Introducción a la Gnosis' :
                    language === 'English' ? 'Introduction to Gnosis' :
                        language === 'Portuguese' ? 'Introdução à Gnose' :
                            ""
            } />

            <ScrollView contentContainerStyle={styles.contentContainer}>
                {language === 'Spanish' ? (
                    textIntroductionData.map((item, index) => (
                        <View key={index}>

                            <Text style={{ ...styles.text, color: colors.globalText }}>{item.text}</Text>
                        </View>
                    ))
                ) : language === 'English' ? (
                    textIntroductionDataEnglish.map((item, index) => (
                        <View key={index}>

                            <Text style={{ ...styles.text, color: colors.globalText }}>{item.text}</Text>
                        </View>
                    ))
                ) : language === 'Portuguese' ? (
                    textIntroductionDataPortu.map((item, index) => (
                        <View key={index}>
                            <Text style={{ ...styles.text, color: colors.globalText }}>{item.text}</Text>
                        </View>
                    ))
                ) : (
                    <Text>No se encontraron datos para el idioma seleccionado.</Text>
                )}
                <View style={{marginTop:10}}><ItemSeparator/></View>
                

                <SocialNetworks />

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flexGrow: 1,
    },
    text: {
        marginTop: '10%',
        fontSize: 20,
        lineHeight: 24,
        marginHorizontal: 5
    },
    subtitle: {
        marginTop: 20,
        fontSize: 20,
        lineHeight: 35,
    }

});
