import React, { useContext, useEffect } from 'react'
import { FlatList, Image, View, Animated } from 'react-native'
import { menuItems } from '../data/menuItems'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { ItemSeparator } from '../components/ItemSeparator'
import { useAnimation } from '../hooks/useAnimation'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/Store'
import { IconAnimated } from '../components/IconAnimated'


export const HomeScreen = () => {

  const { theme: { colors } } = useContext(ThemeContext)
  const { fadeIn, opacity, height, moveRight, moveLeft } = useAnimation()
  const language = useSelector((state: RootState) => state.language);


  useEffect(() => {
    fadeIn()
    moveRight()
    moveLeft()
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>

      <Animated.View
        style={{
          opacity,
          transform: [{
            translateY: height
          }]
        }}
      >
        <Image
          source={
            language === 'Spanish' ? (colors.background === 'black') ? require('../images/logo_blanco.png') : require('../images/logo_negro.png') :
              language === 'English' ? (colors.background === 'black') ? require('../images/white_logo.png') : require('../images/black_logo.png') :
                language === 'Portuguese' ? (colors.background === 'black') ? require('../images/logotipo_branco.png') : require('../images/logotipo_preto.png') :
                  require('../images/logo_blanco.png')
          }

          style={{ width: 280, height: 150, alignSelf: 'center', resizeMode: 'contain', }}
        />
      </Animated.View>

      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={ItemSeparator}
        style={{ marginTop: '10%' }}
      />

      <IconAnimated />
    </View>
  )
}
