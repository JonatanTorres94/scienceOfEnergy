import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { GoBack } from '../components/GoBack'; // Asegúrate de importar el componente GoBack desde el lugar correcto.
import { HeaderText } from '../components/HeaderText';
import { OpenURLButton } from '../components/OpenURLButton';
import { textData } from '../data/textData';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const TheThreeFactors = () => {

    const {theme: {colors}} = useContext( ThemeContext)


    return (
        <View style={{...styles.container, backgroundColor:colors.background }}>
            <GoBack />
            <HeaderText title='Los 3 Factores' />
            {/* Utilizamos ScrollView para permitir el desplazamiento del texto si es necesario */}
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {textData.map((item, index) => (
                    <View key={index}>
                        {item.subtitle ? <Text style={{...styles.subtitle, color: colors.titleText }}>{item.subtitle}</Text> : null}
                        <Text style={{...styles.text, color:colors.globalText}}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    contentContainer: {
        flexGrow: 1,
    },
    text: {
        marginTop: 20,
        fontSize: 17,
        lineHeight: 24, 
    },
    subtitle:{
        marginTop: 20,
        fontSize: 20,
        lineHeight: 35,
    }
});


