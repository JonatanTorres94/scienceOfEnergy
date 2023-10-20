import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {firebase_auth} from '../firebase/firebase_auth'
import { useNavigation } from '@react-navigation/native';



export const LoginScreen = () => {

  const navigation = useNavigation();
  
  
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>


      <TextInput
            style={styles.input}
            placeholder="Email"
            secureTextEntry

          />
      <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
          />

      <Pressable style={styles.registerButton} onPress={()=> console.log('iniciar sesion')}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </Pressable>

      <Text style={styles.loginText}>
        ¿Ya tienes una cuenta?
        <Text style={styles.loginLink} onPress={() => navigation.navigate('RegisterScreen' as never)}>
          Registrarse
        </Text>
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    registerButton: {
      backgroundColor: 'blue',
      width: '100%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    loginText: {
      marginTop: 20,
      fontSize: 16,
    },
    loginLink: {
      color: 'blue',
      fontWeight: 'bold',
    },
    errorText: {
      color: 'red',
    },
  });
