import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
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
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';;



export const DailyPractices: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [selectedData, setSelectedData] = useState<any>(null);
    const { theme: { colors } } = useContext(ThemeContext)
    const language = useSelector((state: RootState) => state.language);
    const option = (language === 'Spanish') ? 'selecciona una opcion' : (language === 'English') ? 'select an option' : 'selecione uma opção';

    const menuItems = [
        { key: 1, label: "Pranayama" },
        { key: 2, label: (language === 'Spanish') ? 'Mantralizacion' : (language === 'English') ? 'Mantralization' : 'Mantralização' },
        { key: 3, label: (language === 'Spanish') ? 'Lamaseria' : (language === 'English') ? 'Lamasery' : 'Lamaseria' },
        { key: 4, label: (language === 'Spanish') ? 'Alquimia Sexual' : (language === 'English') ? 'Sexual Alchemy' : 'Alquimia Sexual' },
        { key: 5, label: (language === 'Spanish') ? 'Meditacion' : (language === 'English') ? 'Meditation' : 'Meditação' },
        { key: 6, label: (language === 'Spanish') ? 'Desdoblamiento Astral' : (language === 'English') ? 'Astral Splitting' : 'Divisão Astral' },
        { key: 7, label: (language === 'Spanish') ? 'Muerte en marcha' : (language === 'English') ? 'Death on the march' : 'Morte em marcha' },
        { key: 8, label: (language === 'Spanish') ? 'Estudio de las Obras' : (language === 'English') ? 'Study of the Works' : 'Estudo das Obras' },
        { key: 9, label: (language === 'Spanish') ? 'Sacrificio por la humanidad' : (language === 'English') ? 'Sacrifice for humanity' : 'Sacrifício pela humanidade' },

    ];

    const dataMap: Record<string, any> = {
        Pranayama: dataForPranayama,
        Mantralizacion: dataForMantram,
        Mantralization: dataForMantram,
        Mantralização: dataForMantram,
        Lamaseria: dataForLamaseria,
        Lamasery: dataForLamaseria,
        'Alquimia Sexual': dataForAlquimia,
        'Sexual Alchemy': dataForAlquimia,
        Meditacion: dataForMeditation,
        Meditation: dataForMeditation,
        Meditação: dataForMeditation,
        'Desdoblamiento Astral': dataForAstralSplitting,
        'Astral Splitting': dataForAstralSplitting,
        'Divisão Astral': dataForAstralSplitting,
        'Muerte en marcha': dataForDeathInProgress,
        'Death on the march': dataForDeathInProgress,
        'Morte em marcha': dataForDeathInProgress,
        'Estudio de las Obras': dataForStudyOfTheWorks,
        'Study of the Works': dataForStudyOfTheWorks,
        'Estudo das Obras': dataForStudyOfTheWorks,
        'Sacrificio por la humanidad': dataForSacrificeForHumanity,
        'Sacrifice for humanity': dataForSacrificeForHumanity,
        'Sacrifício pela humanidade': dataForSacrificeForHumanity
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
                        {(language === 'Spanish') ? 'Prácticas diarias:' : (language === 'English') ? 'Daily Practices:' : 'Práticas diárias:'}
                    </Text>
                    <ModalSelector
                        optionTextStyle={{ color: 'blue' }}
                        data={menuItems}
                        initValue={(language === 'Spanish') ? 'seleccione una opción' : (language === 'English') ? 'select an option' : 'selecione uma opção'}
                        supportedOrientations={['landscape']}
                        accessible={true}
                        cancelText='Cancel'
                        cancelStyle={{height:50, alignItems:'center'}}
                        optionStyle={{height:50}}
                        scrollViewAccessibilityLabel={'Scrollable options'}
                        onChange={(option) => handleSelect(option)}>
                        <TextInput
                            style={styles.textInputDP}
                            editable={false}
                            value={selectedItem || option}
                        />
                    </ModalSelector>
                </View>
                {selectedItem == null && <PreViewDaily />}
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


