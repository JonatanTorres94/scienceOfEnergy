import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { GoBack } from '../components/GoBack'; // Asegúrate de importar el componente GoBack desde el lugar correcto.
import { HeaderText } from '../components/HeaderText';

export const TheThreeFactors = () => {
    return (
        <View style={styles.container}>
            <GoBack />
            <HeaderText title='Los 3 Factores' />
            {/* Utilizamos ScrollView para permitir el desplazamiento del texto si es necesario */}
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.text}>
                    El Nacimiento Espiritual implica crear siete cuerpos existenciales a través del sexo con una pareja estable que colabore en el proceso. La Energía Creadora Sexual es fundamental en este trabajo, que se realiza en un lugar especial y cuidado, como un lecho nupcial.
                </Text>
                <Text style={styles.text}>
                    El Segundo Factor es la Muerte Psicológica, que implica liberar la Energía Creadora Sexual atrapada por el yo psicológico. Requiere autoobservación para distinguir los actos del Ego, la personalidad y la Conciencia, y luego pedir a la Madre Divina que desintegre los defectos.
                </Text>
                <Text style={styles.text}>
                    El Tercer Factor es el Sacrificio por la Humanidad, que implica compartir el conocimiento de manera desinteresada con toda la humanidad, sin importar diferencias. Este conocimiento debe entregarse sin expectativas a cambio y sin mezclarlo con otros conocimientos esotéricos o subjetivos. La sabiduría es esencial para despertar la Conciencia y comprender el propósito de la existencia.
                </Text>
                
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
        color: '#333', // Cambia el color del texto según tus preferencias.
    },
});


