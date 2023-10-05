import React from 'react'
import { Dimensions, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { BooksVM } from '../data/books'

import { GoBack } from '../components/GoBack'
import { HeaderText } from '../components/HeaderText'
import { PortBooks } from '../components/PortBooks';

const {width: windowsWWith} = Dimensions.get('window')

export const BooksOfTheVM = () => {
    return (
        <View style={{ flex: 1}}>
            <GoBack />
            <HeaderText title='Libros de los VM' />
            <View style={{  alignContent:'center', marginRight:80}}>
                <Carousel
                    data={BooksVM}
                    renderItem={ ({item}) => <PortBooks name={item.name} cover={item.cover} />}
                    sliderWidth={windowsWWith}
                    itemWidth={300}
                />
            </View>
        </View>
    )
}
