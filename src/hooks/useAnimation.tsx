import { useRef } from "react"
import { Animated, Easing } from "react-native"


export const useAnimation = () => {

    const opacity = useRef(new Animated.Value(0)).current
    const height = useRef(new Animated.Value(-150)).current

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 2500,
                useNativeDriver: true

            }
        ).start(() => console.log('Fin animacion'))

        Animated.timing(
            height,
            {
                toValue: 0,
                duration: 1500,
                useNativeDriver: true,
                easing: Easing.bounce
            }
        ).start()
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true

            }
        ).start()

        Animated.timing(
            height,
            {
                toValue: -150,
                duration: 1500,
                useNativeDriver: true,
            }
        ).start()
    }
    return {

        fadeIn,
        fadeOut,
        opacity,
        height

    }
}
