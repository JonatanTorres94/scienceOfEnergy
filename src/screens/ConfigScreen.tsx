import React, { useContext, useEffect, useState } from 'react'
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { HeaderText } from '../components/HeaderText'
import { sty, styles } from '../theme/styles';
import Icon from 'react-native-vector-icons/Ionicons'
import { ThemeComponent } from '../components/ThemeComponent';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { clearUser, setLanguage } from '../redux/slice/authSlice';
import { LanguageComponent } from '../components/LanguageComponent';
import ShowDownloadedBooks from '../components/ShowDownloadedBooks';
import { Donations } from '../components/Donations';




export const ConfigScreen = () => {

  const { theme: { colors } } = useContext(ThemeContext)
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalComponent, setModalComponent] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [isDownloadedBooksModalVisible, setDownloadedBooksModalVisible] = useState(false);

  const downloadedBooks = useSelector((state: RootState) => state.downloadedBooks);
  const language = useSelector((state: RootState) => state.language);
  const userEmail = useSelector((state: RootState) => state.user);

  useEffect(() => {

  }, [userEmail]);

  const toggleModalBooks = () => {
    setDownloadedBooksModalVisible(!isDownloadedBooksModalVisible)
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setModalComponent(null);
    setModalTitle('');
  };

  const openModal = (component: any) => {
    setModalComponent(component);
    setModalVisible(true);
  };


  let title = 'Configuración';
  let ajustes = 'Ajustes';
  let idioma = 'Idioma';
  let tema = 'Temas de Aplicación';
  let archivos = 'Archivos descargados'
  let help = 'Ayuda'
  let report = 'Reporte de Bug'
  let politica = 'Política de privacidad'
  let donacion = 'Donaciones'
  let close = 'Cerrar'

  switch (language) {
    case 'English':
      title = 'Setting';
      ajustes = 'Settings';
      idioma = 'Language';
      tema = 'Application Topics';
      archivos = 'Downloaded files';
      help = 'Help';
      report = 'Bug Report';
      politica = 'Privacy Policy';
      donacion = 'Donations';
      close = 'Close'
      break;
    case 'Portuguese':
      title = 'Configuração';
      ajustes = 'Configurações';
      idioma = 'Linguagem';
      tema = 'Tópicos de Aplicação';
      archivos = 'Arquivos baixados';
      help = 'Ajuda';
      report = 'Relatório de erro';
      politica = 'Política de Privacidade';
      donacion = 'Doações';
      close = 'Fechar';
      break;
  }


  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <HeaderText title={title} />
      {/* //TODO: IMPLEMENTACION DE LA CUENTA, LA FECHA Y CERRAR SESION}
      {/* VIEW DE LAS VINIETAS DE AJUSTES */}

      <View style={{marginVertical:'25%'}}>
        <View style={{ ...sty.containerStyle, backgroundColor: colors.border }}>
          <View style={styles.boxText}>
            <Text style={styles.titleConfig}> {ajustes}</Text>

            <TouchableOpacity style={styles.itemConfig} onPress={() => openModal(<LanguageComponent />)}>
              <Icon name="globe-outline" size={18} color="black" />
              <Text style={styles.textConfig}>{idioma}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemConfig} onPress={() => openModal(<ThemeComponent />)}>
              <Icon name="color-fill-outline" size={18} color="black" />
              <Text style={styles.textConfig} >{tema}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemConfig} onPress={toggleModalBooks}>
              <Icon name='cloud-download-outline' size={18} color={'black'} />
              <Text style={styles.textConfig}  >{archivos}</Text>
              <ShowDownloadedBooks
                isVisible={isDownloadedBooksModalVisible}
                onClose={toggleModalBooks}
              />
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={isModalVisible}
              onRequestClose={toggleModal}
            >
              <View style={sty.modalBackground}>
                <View style={sty.modalContent}>
                  <Text style={sty.modalTitle}>{modalTitle}</Text>
                  {modalComponent}
                  <Pressable onPress={toggleModal} style={sty.btnModal}>
                    <Text style={sty.buttonText}> {close} </Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </View>


        {/* <View style={{ ...sty.containerStyle, backgroundColor: colors.border }}>

        <View style={styles.boxText}>
          <Text style={styles.titleConfig} > {help}</Text>

          <View style={styles.itemConfig}>
            <Icon name='bug-outline' size={18} color={'black'} />
            <Text style={styles.textConfig}  >{report}</Text>
          </View>

          <View style={styles.itemConfig}>
            <Icon name='shield-checkmark-outline' size={18} color={'black'} />
            <Text style={styles.textConfig}>{politica}</Text>
          </View>

        </View>
      </View> */}

        <View style={{ ...sty.containerStyle, backgroundColor: colors.border }}>

          <View style={styles.boxText}>
            <Text style={styles.titleConfig} > {donacion}</Text>

            <TouchableOpacity onPress={() => openModal(<Donations paymentMethod='Paypal' />)}>
              <View style={styles.itemConfig}>
                <Icon name='logo-paypal' size={18} color={'black'} />
                <Text style={styles.textConfig}  >PayPal</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openModal(<Donations paymentMethod='Nequi' />)}>
              <View style={styles.itemConfig}>
                <Icon name='wallet-outline' size={18} color={'black'} />
                <Text style={styles.textConfig}  >Nequi</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openModal(<Donations paymentMethod='BTC' />)}>
              <View style={styles.itemConfig}>
                <Icon name='logo-bitcoin' size={18} color={'black'} />
                <Text style={styles.textConfig}  >BTC Bitcoin</Text>
              </View>
            </TouchableOpacity>


          </View>
        </View>
      </View>
    </View>


  )
}


