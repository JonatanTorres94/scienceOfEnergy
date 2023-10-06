import React from 'react'
import { Text, View } from 'react-native'
import { HeaderText } from '../components/HeaderText'
import { ItemSeparator } from '../components/ItemSeparator'
import { styles } from '../theme/styles';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/colors';

export const ConfigScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bgcConfig }}>
      <HeaderText title='Configuration' />

      <View style={{ flexWrap: 'wrap', backgroundColor: colors.boxConfigColor, marginVertical: 10, borderRadius: 30 }}>

        <View style={styles.boxText}>
          <Text style={styles.titleConfig} > Cuenta</Text>
          <Text style={styles.varOption} >{'User Name'}</Text>
          <Text>nombre de usuario</Text>
          <ItemSeparator />
          <Text style={styles.varOption} >{'05/10/2023'}</Text>
          <Text>Fecha de registro</Text>
        </View>
      </View>



      <View style={{ flexWrap: 'wrap', backgroundColor: colors.boxConfigColor, marginVertical: 10, borderRadius: 30 }}>
        <View style={styles.boxText}>
          <Text style={styles.titleConfig}> Ajustes</Text>
          <View style={styles.itemConfig}>
            <Icon name='lock-closed-outline' size={18} color={'black'} />
            <Text style={{ marginHorizontal: 10, color: 'black' }} >Privacidad y Seguridad</Text>
          </View>

          <View style={styles.itemConfig}>
            <Icon name='notifications-outline' size={18} color={'black'} />
            <Text style={{ marginHorizontal: 10, color: 'black' }} >Notifficaciones y sonidos</Text>
          </View>

          <View style={styles.itemConfig}>
            <Icon name='globe-outline' size={18} color={'black'} />
            <Text style={{ marginHorizontal: 10, color: 'black' }} >Idioma</Text>
          </View>

          <View style={styles.itemConfig}>
            <Icon name='color-fill-outline' size={18} color={'black'} />
            <Text style={{ marginHorizontal: 10, color: 'black' }} >Temas de Aplicacion</Text>
          </View>

          <View style={styles.itemConfig}>
            <Icon name='cloud-download-outline' size={18} color={'black'} />
            <Text style={{ marginHorizontal: 10, color: 'black' }} >Archivos descargados</Text>
          </View>

        </View>
      </View>


      <View style={{ flexWrap: 'wrap', backgroundColor: colors.boxConfigColor, marginVertical: 10, borderRadius: 30 }}>

        <View style={styles.boxText}>
          <Text style={styles.titleConfig} > Ayuda</Text>

          <View style={styles.itemConfig}>
            <Icon name='bug-outline' size={18} color={'black'} />
            <Text style={{ marginHorizontal: 10, color: 'black' }} >Reporte de Bug</Text>
          </View>

          <View style={styles.itemConfig}>
            <Icon name='shield-checkmark-outline' size={18} color={'black'} />
            <Text style={{ marginHorizontal: 10, color: 'black' }} >Politica de privacidad</Text>
          </View>

          <View style={styles.itemConfig}>
            <Icon name='help-circle-outline' size={18} color={'black'} />
            <Text style={{ marginHorizontal: 10, color: 'black' }} >Preguntas frecuentes</Text>
          </View>

        </View>
      </View>
    </View>
  )
}
