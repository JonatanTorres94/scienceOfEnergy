import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PreViewDailyText } from '../data/textData';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PreViewDaily = () => {

    
    const { theme: { colors } } = useContext(ThemeContext)
    const language = useSelector((state: RootState) => state.language);

    return (
        <View style={styles.container}>

            {
                PreViewDailyText.map((item, key) => (
                    <View key={key}>
                        <Text style={{...styles.text, color:colors.globalText}}>
                            {language == 'Spanish' ? item.line1 :
                             language == 'English' ? item.line1En : 
                             language == 'Portuguese' && item.line1Pr 
                            }
                        </Text>

                        <Text style={{...styles.text, color:colors.globalText}}>
                            {language == 'Spanish' ? item.line2 :
                             language == 'English' ? item.line2En : 
                             language == 'Portuguese' && item.line2Pr 
                            }
                        </Text>

                        <Text style={{...styles.text, color:colors.globalText}}>
                            {language == 'Spanish' ? item.line3 :
                             language == 'English' ? item.line3En : 
                             language == 'Portuguese' && item.line3Pr 
                            }
                        </Text>

                        <Text style={{...styles.text, color:colors.globalText}}>
                            {language == 'Spanish' ? item.line4 :
                             language == 'English' ? item.line4En : 
                             language == 'Portuguese' && item.line4Pr 
                            }
                        </Text>
                    </View>
                ))
            }

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: '5%',
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});
