import React, { Suspense, lazy, useContext, useEffect, useState } from 'react'
import { Dimensions, View, Linking, Button } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { BooksVM } from '../data/books'
import RNFS, { DownloadResult } from 'react-native-fs'


import { GoBack } from '../components/GoBack'
import { HeaderText } from '../components/HeaderText'
import { PortBooks } from '../components/PortBooks';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import PushNotification from 'react-native-push-notification';
import PdfViewer from '../components/PdfViewer';
import DescargarArchivo from '../components/DownloadFiles';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';

const { width: windowsWWith } = Dimensions.get('window')

export const BooksOfTheVM = () => {
    const { theme: { colors } } = useContext(ThemeContext)
    const language = useSelector((state: RootState) => state.language);


    return (

        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <GoBack />
            <HeaderText title={
                language === 'Spanish' ? 'Los 3 Factores' :
                language === 'English' ? 'VM Books' :
                language === 'Portuguese' ? 'Livros VM' :
                ""
            } />

            <View style={{ alignContent: 'center'}}>
                <Carousel
                    data={BooksVM}
                    renderItem={({ item }) => <PortBooks books={item}/>}
                    sliderWidth={windowsWWith}
                    itemWidth={350}
                />
            </View>

            



        </View>
    )
}
