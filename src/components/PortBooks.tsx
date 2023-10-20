import React, { useState } from 'react'
import { Button, FlatList, Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/styles';
import { BooksVM } from '../data/books';
import { BooksItems } from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/colors';


export const PortBooks = ({ name, cover, description }: BooksItems) => {

    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const toggleAlert = () => {
        setIsAlertVisible(!isAlertVisible);
    };


    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    source={cover}
                    style={styles.img}
                    resizeMode='contain'
                />
            </View>

            {/* Fondo negro translúcido */}
            <View style={styles.fondoNegro}>
                {/* Título en el fondo negro */}
                <Text style={styles.tituloFondo}>{name}</Text>


                <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'center'}}>


                    <TouchableOpacity style={{margin:12, marginTop:15}}>
                        <Icon name='cloud-download-outline' size={35} color={colors.alert} />
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.botonFondo} onPress={toggleAlert}>

                        <Icon name="information-circle-outline" size={25} color="white" style={styles.icono} />
                        <Text style={styles.textoBoton}>Info</Text>

                    </TouchableOpacity>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isAlertVisible}
                        onRequestClose={toggleAlert}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>{name}</Text>
                                <Text style={styles.modalMessage}> {description} </Text>
                                <TouchableOpacity
                                    style={styles.modalButton}
                                    onPress={toggleAlert}
                                >
                                    <Text style={styles.buttonText}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </View>

    )
}
