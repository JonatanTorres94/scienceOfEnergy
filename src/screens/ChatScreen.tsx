import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/styles';
import { colors } from '../theme/colors';
import { SlidesScreen } from './SlidesScreen';

interface Message {
  id: number;
  text: string;
}

export const ChatScreen: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const login = false

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
    login ? 
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
            style={styles.input}
            value={message}
            onChangeText={(text) => setMessage(text)}
            placeholder="Escribe tu mensaje..."
          />
          <TouchableOpacity onPress={sendMessage}>
            <Ionicons name="send" size={30} color={colors.text} style={styles.sendIcon} />
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <SlidesScreen/>
    )

    
  );

};

