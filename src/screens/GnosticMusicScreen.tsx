import React, { useContext } from 'react'
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
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';

const { width: windowsWWith } = Dimensions.get('window')

export const GnosticMusicScreen = () => {


    const language = useSelector((state: RootState) => state.language);
    const subTitle = [
        '“La música es el verbo de Dios” \n Samael Aun Weor.',
        '“La Música convierte a los hombres en Dioses”. VM SAW.',
        '“Music is the word of God” Samael Aun Weor.',
        '“Music turns men into Gods.” VM SAW.',
        '“A música é a palavra de Deus” Samael Aun Weor.',
        '“A música transforma homens em deuses.” VM SAW.'
    ]


    const { theme: { colors } } = useContext(ThemeContext)

    musicText.map((item, index) => (
        <View key={index}>
            <Text>{item.musicText}</Text>
        </View>
    ))

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <GoBack />
            <ScrollView>
                <HeaderText title='Música Ocultista' />
                <Text style={{ ...styles.titleMusic, color: colors.titleText }}>
                    { language == 'English' ? subTitle[2] : language == 'Portuguese' ? subTitle[4] : subTitle[0]}
                </Text>

                <Text style={{ ...styles.subtitleMusic, color: colors.titleText }}>
                { language == 'English' ? subTitle[3] : language == 'Portuguese' ? subTitle[5] : subTitle[1]}
                </Text>

                <Text style={{ ...styles.textMusic, color: colors.globalText }} >
                    {
                        language === 'Spanish' ? (
                            musicText.map((item, index) => (
                                <Text key={index}>{item.musicText}</Text>
                            ))
                        ) : language === 'English' ? (
                            musicText.map((item, index) => (
                                <Text key={index}>{item.musicTextEn}</Text>
                            ))
                        ) : language === 'Portuguese' ? (
                            musicText.map((item, index) => (
                                <Text key={index}>{item.musicTextPr}</Text>
                            ))
                        ) : (
                            <Text></Text>
                        )
                    }
                </Text>
                <View style={{ alignContent: 'center', marginRight: 80 }}>

                    <Carousel
                        data={OccultMasters}
                        renderItem={({ item }) => <MusicCarousel OccultMaster={item} />}
                        sliderWidth={windowsWWith}
                        itemWidth={300}
                    />


                </View>
            </ScrollView>
        </View>
    )
}
