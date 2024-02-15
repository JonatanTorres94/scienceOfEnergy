import { StyleSheet } from "react-native";
import { colors } from "./colors";


export const styles = StyleSheet.create({



  title: {
    fontSize: 35,
    fontWeight: '200',
    color: 'black'
  },
  itemsText: {
    fontSize: 20,
    color: 'black'
  },
  containerFlatList: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'row'
  },
  textFlatList: {
    fontSize: 25,
    marginLeft: 8,
  },
  img_container: {
    backgroundColor: 'white',
    height: 450,
    width: 350,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.9,
    shadowRadius: 7,
    paddingRight: 10,
    marginRight: 5,
    elevation: 9
  },
  poster_img: {
    borderRadius: 15
  },
  container: {
    backgroundColor: 'white', // Color de fondo de la tarjeta
    borderRadius: 10, // Bordes redondeados
    elevation: 8, // Elevación para sombra en Android
    marginTop: 15,
    marginBottom: 15, // Margen exterior
  },
  imgContainer: {
    width: 350,
    height: 400,
    alignSelf: 'center',
  },
  img: {
    width: '98%',
    height: '98%',
    alignSelf: 'center'
  },
  bottomContainer: {
    flexDirection: 'row', // Elementos en fila horizontal
  },
  fondoNegro: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo negro translúcido
    padding: 10, // Espaciado interno en el fondo negro
    borderBottomLeftRadius: 10, // Bordes redondeados en la esquina inferior izquierda
    borderBottomRightRadius: 10, // Bordes redondeados en la esquina inferior derecha
  },
  tituloFondo: {
    color: 'white', // Color del texto en el fondo negro
    fontSize: 18, // Tamaño del texto
    fontWeight: 'bold', // Negrita
  },
  botonFondo: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Color de fondo del botón
    borderRadius: 25, // Bordes redondeados del botón
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'flex-end',
    marginTop: 10, // Margen superior
    width: 90,
    flexDirection: 'row',
    alignItems: 'center'

  },
  textoBoton: {
    color: 'white', // Color del texto del botón
    fontSize: 16, // Tamaño del texto del botón
    padding: 10, // Espaciado interno del botón
    textAlign: 'center', // Alineación del texto en el centro

  },
  icono: {
    marginLeft: 15, // Espacio entre el icono y el botón
  },

  //Styles MSJ
  containerMsj: {
    flex: 1,
    marginTop: 20
  },
  messageContainer: {
    alignSelf: 'flex-end',
    margin: 10,
    backgroundColor: '#AAC8D3',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 15
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 15
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  sendIcon: {
    marginLeft: 10,
  },

  //MODAL ALERT

  alertButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black'
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    color: colors.text
  },
  modalButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },


  //Config
  titleConfig: {
    fontSize: 22,
    fontWeight: '700',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom:10,
    color: colors.titleText
  },
  boxText: {
    marginBottom: 15,
    margin: 15
  },
  varOption: {
    fontSize: 18,
    color: colors.text
  },
  itemConfig: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center'
  },
  textConfig: {
    marginHorizontal: 10,
    color: 'black',
    fontSize: 16

  },


  //Musica Gnostica
  titleMusic: {
    fontSize: 20,
    margin: 4,
    textAlign: 'center'
  },
  subtitleMusic: {
    marginHorizontal: 15,
    fontSize: 18,
    marginVertical: 10,
  },
  textMusic: {

    fontSize: 16,
    marginHorizontal: 15
  },
  botonFondoMusic: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Color de fondo del botón
    borderRadius: 25, // Bordes redondeados del botón
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 10, // Margen superior
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
    textAlign: 'center'
  },
  modalMessageMusic: {
    fontSize: 16,
    marginBottom: 20,
    color: colors.text,
    flexDirection: 'row'
  },
  closedModal: {
    position: 'relative',
    left: '85%',
    marginBottom: 10

  }
});

export const sty = StyleSheet.create({
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
    width: '85%',
    height: '25%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  btnModal: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    top: '30%',
    borderRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalTitle: {
    color: 'black',
    fontSize: 14
  }, containerStyle: {
    flexWrap: 'wrap',
    marginVertical: 10,
    marginHorizontal:10,
    borderRadius: 30,
    width: '95%'
  }
});