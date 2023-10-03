import React from 'react'
import { View } from 'react-native'
import { colors } from '../theme/colors'

export const ItemSeparator = () => {
  return (
    <View
    style={{
        borderBottomWidth: 1,
        backgroundColor: colors.tertiary,
        opacity: 0.4,
        margin:5
    }}
/>
  )
}
