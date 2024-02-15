import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';

interface Props {
    paymentMethod: string
}

export const Donations = ({ paymentMethod }: Props) => {

    const [copiedText, setCopiedText] = useState('');
    const [isCopiedAlertVisible, setIsCopiedAlertVisible] = useState(false);
    const language = useSelector((state: RootState) => state.language);

    const copyToClipboard = (text: string) => {
        Clipboard.setString(text);
        setCopiedText(text);
        setIsCopiedAlertVisible(true);
        setTimeout(() => setIsCopiedAlertVisible(false), 2000);
    };

    let desc = ''
    let dir = 'mohamedlucc.19@gmail.com'
    let btc = '3PtBm2rzkCmFkM4JoB5sgxwrEw7X8NCASt'

    switch (paymentMethod) {
        case 'Paypal':
            switch (language) {
                case 'Spanish':
                    desc = 'Para enviar tu donación por Paypal puedes copiar la siguiente dirección:'
                    break;
                case 'English':
                    desc = 'To send your donation through Paypal you can copy the following address:'
                    break;
                case 'Portuguese':
                    desc = 'Para enviar sua doação através do Paypal você pode copiar o seguinte endereço:'
                    break;
            }
            break;

        case 'Nequi':
            switch (language) {
                case 'Spanish':
                    desc = 'Si estas en Colombia puedes enviar por Nequi: '
                    dir = '3016567759'
                    break;
                case 'English':
                    desc = 'If you are in Colombia you can send by Nequi:'
                    dir = '3016567759'
                    break;
                case 'Portuguese':
                    desc = 'Se você estiver na Colômbia pode enviar por Nequi:'
                    dir = '3016567759'
                    break;
            }
            break;

        case 'BTC':
            switch (language) {
                case 'Spanish':
                    desc = 'Puedes realizar un envio de criptomonedas en nuestra direccion de BTC: '
                    dir = 'Click para copiar'

                    break;
                case 'English':
                    desc = 'You can send cryptocurrencies to our BTC address:'
                    dir = 'Click to copy'
                    break;
                case 'Portuguese':
                    desc = 'Você pode enviar criptomoedas para nosso endereço BTC:'
                    dir = 'Clique para copiar'
                    break;
            }
            break;

    }

    return (
        <View style={donationsStyles.container}>
            <Text style={donationsStyles.title}>{desc}</Text>
            <View style={donationsStyles.contentContainer}>
                <Text style={donationsStyles.email}>{dir}</Text>
                <TouchableOpacity onPress={() => copyToClipboard((paymentMethod === 'BTC') ? btc : dir)}>
                    <View style={donationsStyles.button}>
                        <Icon name="copy-outline" size={25} color="black" style={styles.icono} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const donationsStyles = StyleSheet.create({
    container: {
        height: 50,
    },
    title: {
        marginBottom: 10,
        fontSize: 16,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    email: {
        marginRight: 1,
        fontSize: 16,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
    },
});
