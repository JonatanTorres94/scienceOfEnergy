import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { GoBack } from '../components/GoBack';
import ModalSelector from 'react-native-modal-selector';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { dataForCircle, dataForConjuracionSiete, dataForJupiter, dataForPentalfa, dataForProtec, dataForSwastica, dataForTetragramaton } from '../data/ProtectiveData';
import { PracticesModule } from '../components/PracticesModule';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';

export const ProtectivePractices = () => {

    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [selectedData, setSelectedData] = useState<any>(null);
    const { theme: { colors } } = useContext(ThemeContext)
    const language = useSelector((state: RootState) => state.language);
    const option = (language === 'Spanish') ? 'selecciona una opcion' : (language === 'English') ? 'select an option' : 'selecione uma opção';

    const menuItems = [
        { key: 1, label: "Pentalfa" },
        { key: 2, label: (language === 'Spanish') ? 'Círculo Mágico' : (language === 'English') ? 'Magic Circle' : 'Círculo Mágico' },
        { key: 3, label: (language === 'Spanish') ? 'Conjuración de Júpiter' : (language === 'English') ? 'Jupiter Conjuration' : 'Conjuração de Júpiter' },
        { key: 4, label: "Tetragramaton" },
        { key: 5, label: (language === 'Spanish') ? 'Limpieza con Esvástica' : (language === 'English') ? 'Swastika cleaning' : 'Limpeza de suástica' },
        { key: 6, label: (language === 'Spanish') ? 'Conjuración de los 7' : (language === 'English') ? 'Conjuration of the 7' : 'Conjuração dos 7' },
        { key: 7, label: (language === 'Spanish') ? 'Conjuro contra el Peligro' : (language === 'English') ? 'Spell against Danger' : 'Feitiço contra o perigo' },
    ];

    const dataMap: Record<string, any> = {
        Pentalfa: dataForPentalfa,
        "Círculo Mágico": dataForCircle,
        "Magic Circle": dataForCircle,
        "Conjuración de Júpiter": dataForJupiter,
        "Jupiter Conjuration": dataForJupiter,
        "Conjuração de Júpiter": dataForJupiter,
        Tetragramaton: dataForTetragramaton,
        "Limpieza con Esvástica": dataForSwastica,
        "Swastika cleaning": dataForSwastica,
        "Limpeza de suástica": dataForSwastica,
        "Conjuracion de los 7": dataForConjuracionSiete,
        "Conjuration of the 7": dataForConjuracionSiete,
        "Conjuração dos 7": dataForConjuracionSiete,
        "Conjuro contra el Peligro": dataForProtec,
        "Spell against Danger": dataForProtec,
        "Feitiço contra o perigo": dataForProtec
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
                    <Text style={{ ...styles.titleModal, color: colors.titleText }}>
                        {(language === 'Spanish') ? 'Prácticas de protección:' : (language === 'English') ? 'Protective practices:' : 'Práticas de proteção:'}
                    </Text>
                    <ModalSelector
                        optionTextStyle={{ color: 'blue' }}
                        //overlayStyle={{backgroundColor:'blue'}}
                        data={menuItems}
                        initValue="Selecciona una opción"
                        supportedOrientations={['landscape']}
                        accessible={true}
                        scrollViewAccessibilityLabel={'Scrollable options'}
                        cancelButtonAccessibilityLabel={'Cancel Button'}
                        onChange={(option) => handleSelect(option as any)}>
                        <TextInput
                            style={styles.textInputDP}
                            editable={false}
                            value={selectedItem || option}
                        />
                    </ModalSelector>
                </View>
                {selectedItem && <PracticesModule ProtectiveDetail={selectedData} />}


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
        flex: 1,
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

