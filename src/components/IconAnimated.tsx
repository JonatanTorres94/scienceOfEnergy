import React, { useContext, useEffect } from 'react'
import { Animated, Image, Text, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/Store'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const IconAnimated = () => {

    useEffect(() => {
        fadeIn()
        moveRight()
        moveLeft()
      }, [])
    
    
  const { opacity,positionX, positionX2,fadeIn,moveLeft,moveRight } = useAnimation()
  const language = useSelector((state: RootState) => state.language);
  const { theme: { colors } } = useContext(ThemeContext)

    return (
        <View style={{ flexDirection:'row', marginBottom:10}}>
            <Animated.View
                style={{
                    opacity,
                    transform: [{
                        translateX: positionX
                    }]
                }}
            >

                <Image
                    source={require('../images/waterlog.png') }
                    style={{ width: 140, height: 75, alignSelf: 'center', resizeMode: 'contain', marginBottom: '10%' }}
                />


            </Animated.View>

            <Animated.View
                style={{
                    opacity,
                    transform: [{
                        translateX: positionX2
                    }]
                }}
            >

                <Image
                    source={require('../images/waterlog.png') }
                    style={{ width: 140, height: 75, alignSelf: 'center', resizeMode: 'contain', marginBottom: '10%' }}
                />



            </Animated.View>
        </View>
    )
}
