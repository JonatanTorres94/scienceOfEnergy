import React, { useState } from 'react'
import { Button, FlatList, Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/styles';
import { BooksVM } from '../data/books';
import { BooksItems } from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/colors';


export const MusicCarousel = ({ name, cover, description }: BooksItems) => {



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

            </View>
        </View>

    )
}
