import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, TextInput, StyleSheet } from 'react-native';
import ModalSelector from 'react-native-modal-selector'; // Asegúrate de que has importado correctamente ModalSelector
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Pranayama } from '../components/Pranayama'; // Importa tus componentes
import { Mantra } from '../components/Mantra'; // Importa tus componentes
import { GoBack } from '../components/GoBack';

export const DailyPractices: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const menuItems = [
        { key: 1, label: "Pranayama" },
        { key: 2, label: "Mantra" },
        // Agrega más elementos según tus necesidades
    ];

    const handleSelect = (option: { key: number, label: string }) => {
        setSelectedItem(option.label);
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <GoBack />
            <View style={styles.container}>
                <View style={styles.selectorContainer}>
                    <Text style={styles.titleModal}>Practicas diarias:</Text>
                    <ModalSelector
                        optionTextStyle={{color:'red'}}
                        optionStyle={{backgroundColor: 'blue'}}
                        data={menuItems}
                        initValue="Selecciona una opción"
                        supportedOrientations={['landscape']}
                        accessible={true}
                        scrollViewAccessibilityLabel={'Scrollable options'}
                        cancelButtonAccessibilityLabel={'Cancel Button'}
                        onChange={(option) => handleSelect(option)}>
                        <TextInput
                            style={styles.textInputDP}
                            editable={false}
                            value={selectedItem || "Selecciona una opción"}
                        />
                    </ModalSelector>
                </View>
                {selectedItem === 'Pranayama' && <Pranayama />}
                {selectedItem === 'Mantra' && <Mantra />}



            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    selectorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    selectorText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    selectedOptionText: {
        fontSize: 16,
    },
    titleModal: {
        color: 'black',
        fontSize: 25,
        right: 10
    },
    textInputDP:{
        borderWidth: 1,
        borderColor: '#F1F7FD',
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        borderRadius: 10,
        backgroundColor: 'white', // Agrega un fondo blanco
        shadowColor: '#000', // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
        shadowOpacity: 0.5, // Opacidad de la sombra
        shadowRadius: 3, // Radio de la sombra
        elevation: 5,
    }
});


