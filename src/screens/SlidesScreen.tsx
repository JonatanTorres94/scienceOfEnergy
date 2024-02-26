import React, { useRef, useState } from 'react'
import { Animated, ImageSourcePropType, Linking, Text, TouchableOpacity, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Dimensions } from 'react-native'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useAnimation } from '../hooks/useAnimation'
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors'
import { LoginScreen } from './LoginScreen'
import { StackNavigationProp } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/Store'

const { height: screenHeight, width: screenWidht } = Dimensions.get('window')

interface SlideTranslations {
    title: string;
    titleEn: string;
    titlePr: string;
    desc: string;
    descEn: string;
    descPr: string;
    img: ImageSourcePropType
}



const items: SlideTranslations[] = [
    {
        title: 'Comunicate',
        titleEn: 'communicate',
        titlePr: 'comunicar',
        desc: 'En este apartado encontraras nuestro grupo donde podras comunicarte con los instructores de la Ciencia del Energismo',
        descEn: 'In this section you will find our group where you can communicate with the instructors of the Science of Energism',
        descPr: 'Nesta seção você encontrará nosso grupo onde poderá se comunicar com os instrutores da Ciência do Energismo',
        img: require('../images/chatSlice01.png')
    },
    {
        title: 'Respuestas',
        titleEn: 'Answers',
        titlePr: 'Respostas',
        desc: 'El grupo es abierto, podras hacer tus consultas sobre la ciencia del energismo y el trabajo sobre los 3 factores',
        descEn: 'The group is open, you can ask your questions about the science of energy and the work on the 3 factors',
        descPr: 'O grupo é aberto, você pode tirar suas dúvidas sobre a ciência da energia e o trabalho dos 3 fatores',
        img: require('../images/chatSlice02.png')
    },
    {
        title: 'Requisitos',
        titleEn: 'Requirements',
        titlePr: 'Requisitos',
        desc: 'Para poder utilizar el sistema de comunicación es necesario que tengas una cuenta de Telegram ',
        descEn: 'In order to use the communication system you need to have a Telegram account',
        descPr: 'Para utilizar o sistema de comunicação você precisa ter uma conta no Telegram',
        img: require('../images/chatSlice03.png')
    },
]

export const SlidesScreen = () => {



    const [activeIndex, setActiveIndex] = useState(0)
    const { opacity, fadeIn } = useAnimation()
    const isVisible = useRef(false)

    const language = useSelector((state: RootState) => state.language);
    const navigation = useNavigation();

    const handlePress = () => {
        // URL del canal de Telegram al que se desea redirigir
        const telegramChannelUrl = 'https://t.me/+hrWdtRrXG1Y3ZGQx';

        // Abre el enlace en la aplicación de navegador predeterminada
        Linking.openURL(telegramChannelUrl);
    };

    const renderItem = (item: SlideTranslations) => {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center'
            }}>
                <Image
                    source={item.img}
                    style={{ width: 350, height: 400, resizeMode: 'center' }}
                />

                {
                    (language === 'English') ? <Text style={styles.title}> {item.titleEn} </Text>
                        : (language === 'Spanish') ? <Text style={styles.title}> {item.title} </Text>
                            : <Text style={styles.title}> {item.titlePr} </Text>
                }
                {(language === 'English') ? <Text style={styles.subTitle}> {item.descEn} </Text>
                    : (language === 'Spanish') ? <Text style={styles.subTitle}> {item.desc} </Text>
                        : <Text style={styles.subTitle}> {item.descPr} </Text>}

            </View>
        )
    }





    return (

        <View style={{ flex: 1, paddingTop: 5, backgroundColor: colors.backgroundPrimary }}>

            {/* <HeaderText title='Slides Screen' /> */}

            <Carousel
                // ref={ items }
                data={items}
                renderItem={({ item }) => renderItem(item)}
                sliderWidth={screenWidht}
                itemWidth={screenWidht}
                onSnapToItem={(index) => {
                    setActiveIndex(index);
                    if (index === 2) {
                        isVisible.current = true,
                            fadeIn()
                    }
                }}
            />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                alignItems: 'center',
                backgroundColor: 'white',
            }}>

                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                />

                <Animated.View
                    style={{
                        opacity: opacity
                    }}
                >
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        backgroundColor: '#5856d6',
                        width: 150,
                        height: 50,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                        onPress={() => {
                            if (isVisible.current) {
                                handlePress()
                            }
                        }}
                    >

                        <Icon
                            name='chevron-forward-outline'
                            size={40}
                            color={'white'}
                        />

                    </TouchableOpacity>

                </Animated.View>

            </View>


        </View>



    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6'
    },
    subTitle: {
        fontSize: 16,
        color: 'black'

    }
})
