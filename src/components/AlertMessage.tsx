import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AlertProps {
    message: string;
}

export const AlertMessage = ({ message}:AlertProps) => {
    return (
        <View style={styles.alertContainer}>
            <Text style={styles.alertText}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    alertContainer: {
        position: 'relative',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:25,
        padding: 10,
    },
    alertText: {
        color: 'white',
        fontSize: 16,
    },
});

