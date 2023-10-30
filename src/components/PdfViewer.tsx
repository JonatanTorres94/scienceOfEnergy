import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';

interface Props {
    pdfUrl: string
}

const PdfViewer = ({pdfUrl}:Props) => {

    const pdfResource = { uri: pdfUrl , cache: true }


    return (
        <View style={styles.container}>
            <Pdf
                trustAllCerts={false}
                source={pdfResource}
                style={styles.pdf}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`number of page: ${numberOfPages}`)
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pdf:{
        flex:1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
});

export default PdfViewer;
