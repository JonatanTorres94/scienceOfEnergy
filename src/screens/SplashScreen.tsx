import React, { useEffect } from 'react';
import { View, Image, Dimensions } from 'react-native';



const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const SplashScreen = () => {

    return (
        <View style={{ flex: 1, backgroundColor: '#001100' }}>
            <Image style={{ width: screenWidth, height: screenHeight }} source={require('../images/splash.png')} resizeMode='contain' />
        </View>
    );
};


export default SplashScreen;