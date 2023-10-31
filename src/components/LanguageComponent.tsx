import React ,{useState} from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import CountryFlag from "react-native-country-flag";
import { setLanguage } from '../redux/slice/authSlice';
import { useDispatch } from 'react-redux';


export const LanguageComponent = () => {


    const dispatch = useDispatch();
    
    return (

        <View style={{ height: 50, flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
            <TouchableOpacity onPress={()=>dispatch(setLanguage('English'))}><CountryFlag isoCode="us" size={45} /></TouchableOpacity>
            <TouchableOpacity onPress={()=>dispatch(setLanguage('Spanish'))}><CountryFlag isoCode="es" size={45} /></TouchableOpacity>
            <TouchableOpacity onPress={()=>dispatch(setLanguage('Portuguese'))}><CountryFlag isoCode="br" size={45} /></TouchableOpacity>

        </View>
    )
}

