import { View, Text, SafeAreaView, Image, useWindowDimensions, KeyboardAvoidingView } from "react-native";
import React from "react";
import TextField from "../components/TextField";
import styles from "./styles";
import logo from '../assets/logo.png';
import CustomeBtn from "../components/CustomeBtn";
import SecondaryBtn from "../components/SecondaryBtn";

export default function Login({navigation}) {
    const {height, width} = useWindowDimensions();
    function login(){
      navigation.navigate('Home')
    }

    function signup(){
      navigation.navigate('Signup')
    }
  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={{width: width, alignItems: 'center'}}>
            <View style={styles.imgContainer}>
                <Image source={logo} resizeMode='contain' style={{width: '50%'}} />
            </View>
            <TextField icon='md-mail' placeholder='Email' />
            <TextField icon='md-lock-closed' placeholder='Password' />
            <View style={{marginTop: '15%'}} />
            <CustomeBtn name='Sign in' onPress={login} />
            <View style={{marginTop: '6%'}} />
            <SecondaryBtn name='Forgot Password?' />
            <SecondaryBtn name='Dont have an account?' onPress={signup} />

        </KeyboardAvoidingView>                                             
    </SafeAreaView>
  );
}
