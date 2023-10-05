import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    

    title: {
        fontSize: 35,
        fontWeight: '200',
        color: 'black'
    },
    itemsText:{
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
        backgroundColor:'white',
        height:450,
        width:350,
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
        margin: 10, // Margen exterior
      },
      imgContainer: {
        width: 350,
        height: 350,
        alignSelf: 'center',
      },
      img: {
        width: '100%',
        height: '100%',
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
        marginLeft: 5, // Espacio entre el icono y el botón
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
    
});