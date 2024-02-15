import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import { HeaderText } from '../components/HeaderText';
import PdfViewer from '../components/PdfViewer';
import Icon from 'react-native-vector-icons/Ionicons';
import { GoBack } from '../components/GoBack';
import DownloadFiles from '../components/DownloadFiles';
import { TextTranslator } from '../data/textData';
import { setDownloadedBooks } from '../redux/slice/authSlice';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const IntroductionToGnosis = () => {
    const language = useSelector((state: RootState) => state.language);
    const url = 'https://firebasestorage.googleapis.com/v0/b/cienciadelenergismo-bd5aa.appspot.com/o/Introduccion%20a%20la%20Gnosis.pdf?alt=media&token=9903e595-c856-46d3-a8d3-5fa12bf31ad1';
    const urlEn = 'https://firebasestorage.googleapis.com/v0/b/cienciadelenergismo-bd5aa.appspot.com/o/Introduction%20to%20the%20Gnosis.pdf?alt=media&token=25c455cd-e182-4cfa-a25c-dc2ffb9af16f'
    const urlPort = 'https://firebasestorage.googleapis.com/v0/b/cienciadelenergismo-bd5aa.appspot.com/o/Introdu%C3%A7%C3%A3o%20%C3%A0%20Gnose.pdf?alt=media&token=43fe1cb9-678b-4741-909b-c18084bc4a9b'
    const name = 'Introduction to Gnosis'
    const [showPdf, setShowPdf] = useState(false);
    const dispatch = useDispatch();
    const { theme: { colors } } = useContext(ThemeContext)
    const togglePdfView = () => {
        setShowPdf(!showPdf);
    };

    const introductionText = TextTranslator.map((value) => {
        if (language === 'Spanish') {
            return value.introductionSpanish;
        } else if (language === 'English') {
            return value.introductionEnglish;
        } else if (language === 'Portuguese') {
            return value.introductionPortu;
        }
        return ''; // Manejar el caso por defecto
    });

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <GoBack />
            <HeaderText title={
                language === 'Spanish' ? 'Introducción a la Gnosis' :
                    language === 'English' ? 'Introduction to Gnosis' :
                        language === 'Portuguese' ? 'Introdução à Gnose' :
                            ""
            } />

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{ marginTop: 10, alignItems: 'flex-start', marginHorizontal: '15%' }}
                    onPress={togglePdfView}>
                    <Icon name='eye-outline' size={35} color={colors.primary} />
                </TouchableOpacity>

                <View style={{ flex: 1 }}></View>

                <TouchableOpacity style={{ marginTop: 10, alignItems: 'flex-start', marginHorizontal: '15%' }} onPress={() =>
                    DownloadFiles({
                        uri: url,
                        name,
                        onDownloadComplete: () => dispatch(setDownloadedBooks(name))
                    })
                }>
                    <Icon name='cloud-download-outline' size={35} color={colors.primary} />
                </TouchableOpacity>

            </View>

            {showPdf ? (
                <PdfViewer pdfUrl={(language === 'Spanish') ? url : (language === 'English') ? urlEn : urlPort} />
            ) : (
                <View>
                    <Text style={{ fontSize: 21, marginBottom: 10, color: colors.globalText, alignContent: 'center', margin: 15, marginTop: '25%' }} >
                        {introductionText.map((text, index) => (
                            <Text key={index}>{text}</Text>
                        ))}
                    </Text>
                </View>
            )}

        </View>
    )
}
