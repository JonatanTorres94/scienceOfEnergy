import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/colors'
import { useNavigation } from '@react-navigation/native'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const GoBack = () => {
    const navigation = useNavigation()
    const { theme:{colors} } = useContext(ThemeContext)
    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ left: 10, top: 10, bottom:15 }}
        >
            <Icon name="arrow-back-outline" size={35} color={colors.primary} />
        </TouchableOpacity>
    )
}
