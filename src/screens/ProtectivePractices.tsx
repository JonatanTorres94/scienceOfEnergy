import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { GoBack } from '../components/GoBack';

const { width } = Dimensions.get('window');
const boxSize = width / 2; // Restamos 20 para dejar espacio entre los cuadros

export const ProtectivePractices: React.FC = () => {
    const renderBoxes = () => {
        const boxTexts = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

        return (
            <View style={{ flex: 1 }}>
                <GoBack />


                <ScrollView>
                    <View style={styles.container}>



                        {[0, 1, 2, 3].map((rowIndex) => (
                            <View key={rowIndex} style={styles.row}>
                                {[0, 1].map((colIndex) => {
                                    const index = rowIndex * 2 + colIndex;
                                    const text = boxTexts[index];
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            style={styles.box}
                                            onPress={() => handleBoxPress(text)}
                                        >
                                            <Text style={styles.boxText}>{text}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        );
    };

    const handleBoxPress = (text: string) => {
        console.log(`Pressed box ${text}`);
        // Puedes implementar aquí la lógica para manejar el evento de presionar el cuadro
    };

    return renderBoxes();
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 90,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    box: {
        width: boxSize,
        height: boxSize,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        margin: 0,
    },
    boxText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

