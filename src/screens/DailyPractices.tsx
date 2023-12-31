import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import ModalSelector from 'react-native-modal-selector'; // Asegúrate de que has importado correctamente ModalSelector
import {
    dataForAlquimia,
    dataForAstralSplitting,
    dataForDeathInProgress,
    dataForLamaseria,
    dataForMantram,
    dataForMeditation,
    dataForPranayama,
    dataForSacrificeForHumanity,
    dataForStudyOfTheWorks
} from '../data/videosData'
import { VideoModule } from '../components/VideoModule'; 
import { GoBack } from '../components/GoBack';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { PreViewDaily } from '../components/PreViewDaily';



export const DailyPractices: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [selectedData, setSelectedData] = useState<any>(null);
    const { theme: { colors } } = useContext(ThemeContext)

    const menuItems = [
        { key: 1, label: "Pranayama" },
        { key: 2, label: "Mantralizacion" },
        { key: 3, label: "Lamaseria" },
        { key: 4, label: "Alquimia Sexual" },
        { key: 5, label: "Meditacion" },
        { key: 6, label: "Desdoblamiento Asrtral" },
        { key: 7, label: "Muerte En Marcha" },
        { key: 8, label: "Estudio de las Obras" },
        { key: 9, label: "Sacrificio por la Humanidad" },
    ];

    const dataMap: Record<string, any> = {
        Pranayama: dataForPranayama,
        Mantralizacion: dataForMantram,
        Lamaseria: dataForLamaseria,
        'Alquimia Sexual': dataForAlquimia,
        Meditacion: dataForMeditation,
        'Desdoblamiento Asrtral': dataForAstralSplitting,
        'Muerte En Marcha': dataForDeathInProgress,
        'Estudio de las Obras': dataForStudyOfTheWorks,
        'Sacrificio por la Humanidad': dataForSacrificeForHumanity,
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
                    <Text style={{ ...styles.titleModal, color: colors.titleText }}>Practicas diarias:</Text>
                    <ModalSelector
                        optionTextStyle={{ color: 'red' }}
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
                {selectedItem == null && <PreViewDaily/>}
                {selectedItem && <VideoModule videoDetails={selectedData} />}

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


