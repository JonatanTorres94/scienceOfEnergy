import React from 'react'
import { Text, View } from 'react-native'
import { HeaderText } from '../components/HeaderText'
import { ItemSeparator } from '../components/ItemSeparator'

export const ConfigScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <HeaderText title='Configuration' />
      <View style={{ flexWrap: 'wrap', backgroundColor: 'white', marginVertical: 10 }}>
        <View style={{marginBottom:15}}>
          <Text> Cuenta</Text>
          <Text>{'Jona'}</Text>
          <Text>nombre de usuario</Text>
          <ItemSeparator />
          <Text>{'05/10/2023'}</Text>
          <Text>Fecha de registro</Text>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: 'green', marginVertical: 10 }}>
        <Text> Part 01</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <Text> Part 01</Text>
      </View>
    </View>
  )
}
