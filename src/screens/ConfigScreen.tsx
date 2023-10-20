import React, { useState } from 'react'
import { Button, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { HeaderText } from '../components/HeaderText'
import { ItemSeparator } from '../components/ItemSeparator'
import { styles } from '../theme/styles';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/colors';
import { ThemeComponent } from '../components/ThemeComponent';

export const ConfigScreen = () => {


  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


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
            <TouchableOpacity onPress={toggleModal}>
              <Text style={{ marginHorizontal: 10, color: 'black' }} >Temas de Aplicacion</Text>
            </TouchableOpacity>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={toggleModal}
          >
            <View style={sty.modalBackground}>
              <View style={sty.modalContent}>
                <ThemeComponent/>
                <Pressable onPress={toggleModal} style={sty.btnModal}>
                  <Text style={sty.buttonText}>Cerrar</Text>
                </Pressable>
                
              </View>
            </View>
          </Modal>





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

const sty = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    height: '25%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  btnModal:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    top:'30%',
    borderRadius: 5,
    elevation: 3, 
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
