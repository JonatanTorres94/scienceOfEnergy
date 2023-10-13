import React, { useEffect } from 'react'
import { FlatList, Image, View, Animated } from 'react-native'
import { HeaderText } from '../components/HeaderText'
import { GoBack } from '../components/GoBack'
import { menuItems } from '../data/menuItems'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { colors } from '../theme/colors'
import { ItemSeparator } from '../components/ItemSeparator'
import { useAnimation } from '../hooks/useAnimation'

export const HomeScreen = () => {

  const { fadeIn, opacity, height } = useAnimation()

  useEffect(() => {
    fadeIn()
  }, [])


  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <Animated.View
        style={{ opacity, 
          transform: [{
            translateY: height
        }] }}
        
      >
        <Image
          source={require('../images/logo_negro.png')}
          style={{ width: 280, height: 150, alignSelf: 'center', resizeMode: 'contain', }}
        />
      </Animated.View>

      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={ItemSeparator}
      />

    </View>
  )
}
