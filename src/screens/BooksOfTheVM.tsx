import React, { useContext } from 'react'
import { Dimensions, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { BooksVM } from '../data/books'

import { GoBack } from '../components/GoBack'
import { HeaderText } from '../components/HeaderText'
import { PortBooks } from '../components/PortBooks';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const {width: windowsWWith} = Dimensions.get('window')

export const BooksOfTheVM = () => {
    const {theme: {colors}} = useContext( ThemeContext)
    return (
        <View style={{ flex: 1 ,backgroundColor: colors.background}}>
            <GoBack />
            <HeaderText title='Libros de los VM' />
            <View style={{  alignContent:'center', marginRight:80}}>
                <Carousel
                    data={BooksVM}
                    renderItem={ ({item}) => <PortBooks name={item.name} cover={item.cover} description={item.description}/>}
                    sliderWidth={windowsWWith}
                    itemWidth={300}
                />
            </View>
        </View>
    )
}
