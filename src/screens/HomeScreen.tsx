import React from 'react'
import { FlatList, Image, View } from 'react-native'
import { HeaderText } from '../components/HeaderText'
import { GoBack } from '../components/GoBack'
import { menuItems } from '../data/menuItems'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { colors } from '../theme/colors'
import { ItemSeparator } from '../components/ItemSeparator'

export const HomeScreen = () => {


  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <Image
        source={require('../images/logo_negro.png')}
        style={{ width: 280, height: 150, alignSelf: 'center', resizeMode: 'contain' }}
      />

      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={ItemSeparator}
      />


    </View>
  )
}
