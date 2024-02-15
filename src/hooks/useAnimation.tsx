import { useRef } from "react"
import { Animated, Easing } from "react-native"


export const useAnimation = () => {

    const opacity = useRef(new Animated.Value(0)).current
    const height = useRef(new Animated.Value(-150)).current
    const positionX = useRef(new Animated.Value(-150)).current;
    const positionX2 = useRef(new Animated.Value(150)).current;

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

    const moveRight = () =>{

      Animated.timing(positionX, {
          toValue: 250, // Cambia este valor para ajustar la distancia del desplazamiento
          duration: 2000,
          useNativeDriver: true,
      }).start();
    }

    const moveLeft = () =>{

        Animated.timing(positionX2, {
            toValue: -120, // Cambia este valor para ajustar la distancia del desplazamiento
            duration: 2000,
            useNativeDriver: true,
        }).start();
      }
    return {

        fadeIn,
        fadeOut,
        opacity,
        height,
        positionX,
        positionX2,
        moveRight,
        moveLeft

    }
}
