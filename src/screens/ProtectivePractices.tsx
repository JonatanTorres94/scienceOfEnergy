import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { GoBack } from '../components/GoBack';
import ModalSelector from 'react-native-modal-selector';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { dataForPentalfa } from '../data/ProtectiveData';
import { PracticesModule } from '../components/PracticesModule';

export const ProtectivePractices = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [selectedData, setSelectedData] = useState<any>(null);
    const { theme: { colors } } = useContext(ThemeContext)

    const menuItems = [
        { key: 1, label: "Pentalfa" },
        { key: 2, label: "Circulo Mágico" },
        { key: 3, label: "Conjuracion de Jupiter" },
        { key: 4, label: "Tetragramaton" },
        { key: 5, label: "Limpieza con Esvastica" },
        { key: 6, label: "Proteccion contra Brujas" },
        { key: 7, label: "Conjuracion de los 7" },
        { key: 8, label: "Conjuro para defenderse de los enemigos" },
    ];

    const dataMap: Record<string, any> = {
        Pentalfa: dataForPentalfa
    };

    const handleSelect = (option: { key: number, label: string }) => {
        setSelectedItem(option.label);
        setSelectedData(dataMap[option.label]);

    };


    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <GoBack />
            <View style={styles.container}>
                <View style={styles.selectorContainer}>
                    <Text style={{ ...styles.titleModal, color: colors.titleText}}>Practicas de Proteccion:</Text>
                    <ModalSelector
                        optionTextStyle={{ color: 'blue' }}
                        //overlayStyle={{backgroundColor:'blue'}}
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
                {selectedItem && <PracticesModule ProtectiveDetail={selectedData}/>}
                {/* {selectedItem == null && <PreViewDaily />}
                selectedItem && <VideoModule videoDetails={selectedData} />}  */}

            </View>
        </View>
    );
}
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
        flex:1,
        margin: 10,
        fontSize: 25,
        right: 10
    },
    textInputDP: {
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

