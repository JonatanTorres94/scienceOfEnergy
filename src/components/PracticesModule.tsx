import React from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { ProtectiveInterface } from '../interfaces/interfaces';


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const imageWidth = screenWidth;
const imageHeight = screenHeight;


interface Props {
    ProtectiveDetail: ProtectiveInterface
}

export const PracticesModule = ({ ProtectiveDetail: { title, cover } }: Props) => {

    const scaleImage = useSharedValue(1)
    const focoX = useSharedValue(0)
    const focaY = useSharedValue(0)

    const pinchScreen = Gesture.Pinch()
        .onStart((e) => {
            focoX.value = e.focalX
            focaY.value = e.focalY
        })
        .onUpdate((e) => {
            scaleImage.value = e.scale

        })
    const centerImg = {
        x: screenWidth / 2,
        y: screenHeight / 2
    }

    const styleAnimated = useAnimatedStyle(() => ({
        transform: [
            { translateX: focoX.value },
            { translateY: focaY.value },
            { translateX: - centerImg.x },
            { translateY: - centerImg.y },
            { scale: scaleImage.value },
            { translateX: - focoX.value },
            { translateY: - focaY.value },
            { translateX: centerImg.x },
            { translateY: centerImg.y },
        ],
        width: imageWidth,
        height: imageHeight,
        marginBottom: '90%'
    }))

    return (
        <View style={styles.container}>

            <GestureHandlerRootView>
                <GestureDetector gesture={pinchScreen}>
                    <Animated.Image
                        source={cover}
                        style={styleAnimated}
                        resizeMode="contain"
                    />
                </GestureDetector>
            </GestureHandlerRootView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
});

