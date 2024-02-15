import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';

interface ShowDownloadedBooksModalProps {
    isVisible: boolean; // Indica si el modal está visible o no
    onClose: () => void; // Función para cerrar el modal
}

const ShowDownloadedBooks: React.FC<ShowDownloadedBooksModalProps> = ({ isVisible, onClose }) => {
    const downloadedBooks = useSelector((state: RootState) => state.downloadedBooks);
    
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Libros Descargados</Text>
                    <ScrollView style={styles.scrollView}>
                        {downloadedBooks.map((bookName, index) => (
                            <Text key={index} style={styles.bookName}>{bookName}</Text>
                        ))}
                    </ScrollView>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={onClose} style={styles.button}>
                            <Text style={styles.buttonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    scrollView: {
        maxHeight: 200,
        marginVertical: 10,
    },
    bookName: {
        marginBottom: 5,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        borderWidth: 0.5,
        borderColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default ShowDownloadedBooks;
