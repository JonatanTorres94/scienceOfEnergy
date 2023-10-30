import React, { useContext, useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/styles';
import { colors } from '../theme/colors';
import { SlidesScreen } from './SlidesScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import DescargarArchivo from '../components/DownloadFiles';

interface Message {
  id: number;
  text: string;
}

export const ChatScreen: React.FC = () => {

  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userEmail = useSelector((state: RootState) => state.auth.user);
  const isLoggedIn = userEmail !== null

  const {theme: {colors}} = useContext( ThemeContext)

  useEffect(() => {
  
    console.log("Este es el usuario "+userEmail)
  }, [isLoggedIn]);



  
  const sendMessage = () => {
    if (message.trim() === '') return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: message,

    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };


  return (
    (isLoggedIn || userEmail ) ? 
    (
      <View style={styles.containerMsj}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={{...styles.input, color: colors.globalText}}
            value={message}
            onChangeText={(text) => setMessage(text)}
            placeholder="Escribe tu mensaje..."
            placeholderTextColor={colors.globalText}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Ionicons name="send" size={30} color={colors.border} style={styles.sendIcon} />
          </TouchableOpacity>
          
        </View>
      </View>
    ) : (
      <SlidesScreen/>
    )

    
  );

};

