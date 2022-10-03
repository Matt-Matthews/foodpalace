import { View, Text,SafeAreaView, Image, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import React from "react";
import TextField from "../components/TextField";
import styles from "./styles";
import logo from '../assets/logo.png';
import CustomeBtn from "../components/CustomeBtn";
import SecondaryBtn from "../components/SecondaryBtn";

export default function Signup({navigation}) {
    const {height, width} = useWindowDimensions();
    function signup(){
        navigation.navigate('Login')
    }
    
    function login(){
        navigation.navigate('Login')
    }
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <KeyboardAvoidingView style={{width: width, alignItems: 'center'}}>
                <View style={[styles.imgContainer,{marginTop: height* 0.1, marginBottom: height* 0.05}]}>
                    <Image source={logo} resizeMode='cover' style={{width: '37.5%', height: height*0.2}} />
                </View>

                <TextField icon='md-person-sharp' placeholder='Firstname' />
                <TextField icon='md-person-sharp' placeholder='Lastname' />
                <TextField icon='md-mail' placeholder='Email' />
                <TextField icon='md-phone-portrait-outline' placeholder='Mobile Number' />
                <TextField icon='md-lock-closed' placeholder='Create password' />
                <TextField icon='md-lock-closed' placeholder='Confirm password' />
                <View style={{marginTop: '7%'}} />
                <CustomeBtn name='Sign up' onPress={onPress} />
                <View style={{marginTop: '5%'}} />
                <SecondaryBtn name='Already have an account?' onPress={login} />

            </KeyboardAvoidingView>
        </ScrollView>                                             
    </SafeAreaView>
  );
}
