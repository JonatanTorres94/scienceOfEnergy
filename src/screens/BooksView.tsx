import React from 'react'
import { View } from 'react-native'
import { GoBack } from '../components/GoBack'
import PdfViewer from '../components/PdfViewer'
import { RouteProp } from '@react-navigation/native';

type BooksViewRoute = RouteProp<{ BooksView: { url: string } }>;

export const BooksView = ({ route }: { route: BooksViewRoute }) => {
    const { url } = route.params;
    
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginBottom: 10 }}>
                <GoBack />
            </View>
            <PdfViewer pdfUrl={url} />
        </View>
    )
}
