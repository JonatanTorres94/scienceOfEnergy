import React, { useContext, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebase_auth } from '../firebase/firebase_auth'
import { useNavigation } from '@react-navigation/native';
import { AlertMessage } from '../components/AlertMessage';
import { useDispatch, useSelector } from 'react-redux';
import { setIdToken, setUser } from '../redux/slice/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { RootState } from '../redux/Store';


export const LoginScreen = () => {

  const {theme: {colors}} = useContext( ThemeContext)

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleLogin = async () => {
    try {
      console.log("Intentando iniciar sesión...");
      const response = await signInWithEmailAndPassword(firebase_auth, email, password) as any; 

      // Almacena la información de usuario en Redux
      console.log("Guardando datos");
      dispatch(setUser(response.user.email));
      dispatch(setIdToken(response._tokenResponse.idToken));

      // Navega a la pantalla de Chat después de autenticar
      console.log("Iniciar sesión exitoso");
      navigation.goBack()
      navigation.navigate('Chat' as never);
    } catch (e) {
      console.log("Error al iniciar sesión:", e);
    }
  };


  return (

    <View style={styles.container}>
      <Text style={{...styles.title, color:colors.globalText}}>Iniciar Sesión</Text>


      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={colors.globalText}
        secureTextEntry
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}

      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor={colors.globalText}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Pressable style={styles.registerButton} onPress={() => handleLogin()}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </Pressable>

    

      <Text style={{...styles.loginText, color:colors.globalText}}>
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
