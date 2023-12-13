import React, { useContext } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { ProtectiveInterface } from '../interfaces/interfaces';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { RootState } from '../redux/Store';




interface Props {
    ProtectiveDetail: ProtectiveInterface
}

export const PracticesModule = ({ ProtectiveDetail: { title, cover, text, textEn, textPr, titleEn, titlePr } }: Props) => {

    const { theme: { colors } } = useContext(ThemeContext)
    const language = useSelector((state: RootState) => state.language);
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    const imageWidth = screenWidth;
    const imageHeight = screenHeight * 0.35;

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
        resizeMode: 'contain',
    }))

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, color: colors.globalText }}>
            {(language === 'Spanish' ? title : language === 'English' ? titleEn : titlePr)}
            </Text>
            <View>
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

            <ScrollView style={{ flex: 1 }}>
                <Text style={{ margin: 5, fontSize: 18, color: colors.globalText }}>
                    {(language === 'Spanish' ? text : language === 'English' ? textEn : textPr)}
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
});

