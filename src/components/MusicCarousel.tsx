import React, { useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/styles';
import { OccultMastersInterface } from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/Ionicons'
import Clipboard from '@react-native-clipboard/clipboard';
import { AlertMessage } from './AlertMessage';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';

interface Props {
    OccultMaster: OccultMastersInterface
}


export const MusicCarousel = ({ OccultMaster: { name, cover, musicalWorks, musicalWorksEn, musicalWorksPr } }: Props) => {

    const language = useSelector((state: RootState) => state.language);

    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [copiedText, setCopiedText] = useState('')
    const [isCopiedAlertVisible, setIsCopiedAlertVisible] = useState(false);



    const copyToClipboard = (text: string) => {
        Clipboard.setString(text);
        setCopiedText(text);
        setIsCopiedAlertVisible(true);
        setTimeout(() => setIsCopiedAlertVisible(false), 2000);
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getString();
        setCopiedText(text);
    };


    const toggleAlert = () => {
        setIsAlertVisible(!isAlertVisible);
    };



    return (
        <View style={{ ...styles.container }}>


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


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>

                    <TouchableOpacity style={styles.botonFondoMusic} onPress={toggleAlert}>

                        <Icon name="musical-notes-outline" size={25} color="white" style={styles.icono} />
                        <Text style={styles.textoBoton}>
                            {
                                language == 'English' ? 'Works of the Masters' : language == 'Portuguese' ? 'Obras dos Mestres' : 'Obras de los Maestros'
                            }
                        </Text>

                    </TouchableOpacity>


                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isAlertVisible}
                        onRequestClose={toggleAlert}
                    >

                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <TouchableOpacity
                                    style={styles.closedModal}
                                    onPress={toggleAlert}
                                >
                                    <Icon name="close-circle-outline" size={35} color="black" style={styles.icono} />

                                </TouchableOpacity>

                                {
                                    language == 'English' ? 
                                    
                                    (musicalWorksEn.map((work, index) => (
                                        <View key={index} style={{ flexDirection: 'row' }}>
                                            <Text style={styles.modalMessageMusic}>
                                                {work}
                                            </Text>
                                            <View style={{ flex: 1 }}></View>
                                            <TouchableOpacity onPress={() => copyToClipboard(work)}>
                                                <Icon name="copy-outline" size={25} color="black" style={styles.icono} />
                                            </TouchableOpacity>

                                        </View>
                                    )))
                                    : language == 'Portuguese' ?
                                    (musicalWorksPr.map((work, index) => (
                                        <View key={index} style={{ flexDirection: 'row' }}>
                                            <Text style={styles.modalMessageMusic}>
                                                {work}
                                            </Text>
                                            <View style={{ flex: 1 }}></View>
                                            <TouchableOpacity onPress={() => copyToClipboard(work)}>
                                                <Icon name="copy-outline" size={25} color="black" style={styles.icono} />
                                            </TouchableOpacity>

                                        </View>
                                    ))) :
                                    (musicalWorks.map((work, index) => (
                                        <View key={index} style={{ flexDirection: 'row' }}>
                                            <Text style={styles.modalMessageMusic}>
                                                {work}
                                            </Text>
                                            <View style={{ flex: 1 }}></View>
                                            <TouchableOpacity onPress={() => copyToClipboard(work)}>
                                                <Icon name="copy-outline" size={25} color="black" style={styles.icono} />
                                            </TouchableOpacity>

                                        </View>
                                    )))


                                }
                                {isCopiedAlertVisible && (<AlertMessage message="Obra copiada" />)}


                            </View>
                        </View>

                    </Modal>


                </View>
            </View>

        </View>

    )
}
