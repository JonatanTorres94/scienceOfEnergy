import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { GoBack } from '../components/GoBack'; // Asegúrate de importar el componente GoBack desde el lugar correcto.
import { HeaderText } from '../components/HeaderText';
import { OpenURLButton } from '../components/OpenURLButton';
import { textData } from '../data/textData';

export const TheThreeFactors = () => {



    return (
        <View style={styles.container}>
            <GoBack />
            <HeaderText title='Los 3 Factores' />
            {/* Utilizamos ScrollView para permitir el desplazamiento del texto si es necesario */}
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {textData.map((item, index) => (
                    <View key={index}>
                        {item.subtitle ? <Text style={styles.subtitle}>{item.subtitle}</Text> : null}
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // Cambia el color de fondo según tus preferencias.
        padding: 10,
    },
    contentContainer: {
        flexGrow: 1,
    },
    text: {
        marginTop: 20,
        fontSize: 17,
        lineHeight: 24,
        color: '#393939', // Cambia el color del texto según tus preferencias.
    },
    subtitle:{
        marginTop: 20,
        fontSize: 20,
        lineHeight: 35,
        color: 'black',
    }
});


