import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/styles'
import { colors } from '../theme/colors'
// import { ThemeContext } from '../context/themeContext/ThemeContext'

interface Props{
    title: string
}

export const HeaderText = ({title}:Props) => {


    const { top, bottom } = useSafeAreaInsets()

    // const { theme:{colors} } = useContext(ThemeContext)

    return (
        <View style={{ marginTop: top + 20, marginBottom: bottom + 15, alignSelf: 'center' }}>
            <Text style={{...styles.title, color: colors.titleText}}> {title} </Text>
        </View>
    )
}
