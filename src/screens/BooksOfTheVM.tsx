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



    return (

        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <GoBack />
            <HeaderText title='Libros de los VM' />

            <View style={{ alignContent: 'center', marginRight: 80 }}>
                <Carousel
                    data={BooksVM}
                    renderItem={({ item }) => <PortBooks name={item.name} cover={item.cover} description={item.description} url={item.url}/>}
                    sliderWidth={windowsWWith}
                    itemWidth={300}
                />
            </View>



        </View>
    )
}
