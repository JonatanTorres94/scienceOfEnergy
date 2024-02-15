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
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { setDownloadedBooks } from '../redux/slice/authSlice';

export const TheThirdState = () => {
    const language = useSelector((state: RootState) => state.language);
    const url = 'https://firebasestorage.googleapis.com/v0/b/cienciadelenergismo-bd5aa.appspot.com/o/Tercer%20estado%20de%20conciencia.pdf?alt=media&token=046fe380-bed4-41d3-a7d5-bdc16fd3036c';
    const urlEn = 'https://firebasestorage.googleapis.com/v0/b/cienciadelenergismo-bd5aa.appspot.com/o/the_third_state.pdf?alt=media&token=280ff0c7-f38a-4e5d-9644-fab65fabf6fc'
    const urlPort = 'https://firebasestorage.googleapis.com/v0/b/cienciadelenergismo-bd5aa.appspot.com/o/o_terceiro_estado.pdf?alt=media&token=f59f56f4-68bc-4627-b7cc-b538d350218d'
    const name = 'The third State'
    const dispatch = useDispatch();
    const { theme: { colors } } = useContext(ThemeContext)
    const [showPdf, setShowPdf] = useState(false);

    const togglePdfView = () => {
        setShowPdf(!showPdf);
    };


    const introductionText = TextTranslator.map((value) => {
        if (language === 'Spanish') {
            return value.theThirdSpanish;
        } else if (language === 'English') {
            return value.theThirdEnglish;
        } else if (language === 'Portuguese') {
            return value.theThirdPortu;
        }
        return ''; // Manejar el caso por defecto
    });


    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <GoBack />
            <HeaderText title={
                language === 'Spanish' ? 'El tercer Estado' :
                    language === 'English' ? 'The third State' :
                        language === 'Portuguese' ? 'O terceiro Estado' :
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
                    <Text style={{ fontSize: 21, marginBottom: 10, color: colors.globalText, alignContent: 'center', margin: 15 }}>
                        {introductionText.map((text, index) => (
                            <Text key={index}>{text}</Text>
                        ))}
                    </Text>
                </View>
            )}

        </View>
    );
};
