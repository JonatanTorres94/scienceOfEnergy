import React, { useState } from 'react'
import { Button, FlatList, Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/styles';
import { BooksVM } from '../data/books';
import { BooksItems } from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import DownloadFiles from './DownloadFiles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import { setDownloadedBooks } from '../redux/slice/authSlice';

interface Props {
    books: BooksItems
}

export const PortBooks = ({ books: { name, nameEn, namePr, cover, description, url, urlEn, urlPr } }: Props) => {

    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const navigation = useNavigation();
    const language = useSelector((state: RootState) => state.language);
    const dispatch = useDispatch();

    const toggleAlert = () => {
        setIsAlertVisible(!isAlertVisible);
    };

    const navigateToBooksView = (url: string) => {
        navigation.navigate('BooksView' as never, { url });
    };

    const getLocalizedUrl = () => {
        switch (language) {
            case 'Spanish':
                return url;
            case 'English':
                return urlEn;
            case 'Portuguese':
                return urlPr;
            default:
                return url; // En caso de que el idioma no esté definido correctamente, se usa la URL predeterminada
        }
    };

    const getLocalizedName = () => {
        switch (language) {
            case 'Spanish':
                return name;
            case 'English':
                return nameEn;
            case 'Portuguese':
                return namePr;
            default:
                return name; // En caso de que el idioma no esté definido correctamente, se usa el nombre predeterminado
        }
    };


    const localizedUrl = getLocalizedUrl();



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
                <Text style={styles.tituloFondo}>
                    {(language === 'Spanish') ? name :
                        (language === 'English') ? nameEn :
                            (language === 'Portuguese') ? namePr :
                                name
                    }
                </Text>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>


                    <TouchableOpacity
                        style={{ margin: 12, marginTop: 15 }}
                        onPress={() => {
                            DownloadFiles({
                                uri: localizedUrl,
                                name: getLocalizedName(),
                                onDownloadComplete: () => dispatch(setDownloadedBooks(name)),
                            });
                        }}
                    >
                        <Icon name='cloud-download-outline' size={35} color={colors.alert} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ margin: 12, marginTop: 15 }}
                        onPress={() => navigateToBooksView((language === 'Spanish') ? url : (language === 'English') ? urlEn : (language === 'Portuguese') ? urlPr : url)}>
                        <Icon name='eye-outline' size={35} color={colors.alert} />
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.botonFondo} onPress={toggleAlert}>

                        <Icon name="information-circle-outline" size={25} color="white" style={styles.icono} />
                        <Text style={styles.textoBoton}>Info</Text>

                    </TouchableOpacity>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isAlertVisible}
                        onRequestClose={toggleAlert}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>{name}</Text>
                                <Text style={styles.modalMessage}> {description} </Text>
                                <TouchableOpacity
                                    style={styles.modalButton}
                                    onPress={toggleAlert}
                                >
                                    <Text style={styles.buttonText}>OK</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </View>

    )
}
