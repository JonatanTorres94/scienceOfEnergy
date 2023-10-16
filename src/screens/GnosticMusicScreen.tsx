import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { BooksVM } from '../data/books'

import { GoBack } from '../components/GoBack'
import { HeaderText } from '../components/HeaderText'
import { styles } from '../theme/styles';
import { musicText } from '../data/textData';
import { ScrollView } from 'react-native-gesture-handler';
import { MusicCarousel } from '../components/MusicCarousel';
import { OccultMasters } from '../data/OccultMasters';

const {width: windowsWWith} = Dimensions.get('window')

export const GnosticMusicScreen = () => {

    const subTitle = ['“La música es el verbo de Dios” \n Samael Aun Weor.','“La Música convierte a los hombres en Dioses”. VM SAW.']

    

    return (
        <View style={{ flex: 1}}>
            <GoBack />
            <ScrollView>
            <HeaderText title='Musica Ocultista' />
            <Text style={styles.titleMusic}> {subTitle[0]} </Text>
            <Text style={styles.subtitleMusic}> {subTitle[1]} </Text>
            <Text style={styles.textMusic} > {musicText}  </Text>
            <View style={{  alignContent:'center', marginRight:80}}>
                
                <Carousel
                    data={OccultMasters}
                    renderItem={ ({item}) => <MusicCarousel name={item.name} cover={item.cover} musicalWorks={item.musicalWorks} />}
                    sliderWidth={windowsWWith}
                    itemWidth={300}
                />

                
            </View>
            </ScrollView>
        </View>
    )
}
