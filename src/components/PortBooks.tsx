import React from 'react'
import { Button, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/styles';
import { BooksVM } from '../data/books';
import { BooksItems } from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/Ionicons'


export const PortBooks = ({ name, cover }: BooksItems) => {



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



                <TouchableOpacity style={styles.botonFondo} onPress={() => console.log({name})}>
                    <Icon name="information-circle-outline" size={25} color="white" style={styles.icono} />
                    <Text style={styles.textoBoton}>Info</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
