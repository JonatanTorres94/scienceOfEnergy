import React, { useRef, useState } from 'react'
import { Animated, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Dimensions } from 'react-native'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useAnimation } from '../hooks/useAnimation'
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors'

const { height: screenHeight, width: screenWidht } = Dimensions.get('window')

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Comunicate',
        desc: 'En este apartado podras comunicarte con los instructores de la Ciencia del Energismo',
        img: require('../images/chatSlice01.png')
    },
    {
        title: 'Respuestas',
        desc: 'Una vez enviado tu mensaje un instructor estare respondiendo tu consulta algunas veces el proceso de respuesta puede demorar',
        img: require('../images/chatSlice02.png')
    },
    {
        title: 'Requisitos',
        desc: 'Para poder utilizar el sistema de comunicacion es necesario que tengas una cuenta',
        img: require('../images/chatSlice03.png')
    },
]

export const SlidesScreen = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const { opacity, fadeIn } = useAnimation()
    const isVisible = useRef(false)

    const navigation = useNavigation()

    const renderItem = (item: Slide) => {
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

                <Text style={styles.title}> {item.title} </Text>
                <Text style={styles.subTitle}> {item.desc} </Text>
            </View>
        )
    }


    return (

        <View style={{ flex: 1, paddingTop: 5,  backgroundColor:colors.backgroundPrimary}}>

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
                        if(isVisible.current) {
                            navigation.goBack()
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
        fontSize: 16
    }
})
