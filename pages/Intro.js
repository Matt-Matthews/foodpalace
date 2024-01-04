import { View, Text, SafeAreaView, Image, useWindowDimensions, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import TextField from "../components/TextField";
import styles from "./styles";
import logo from '../assets/logo.png';
import CustomeBtn from "../components/CustomeBtn";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Intro({ navigation }) {
    const { height, width } = useWindowDimensions();
    const navigateTo = () => {
        navigation.navigate('Signup');
        AsyncStorage.setItem('isFirstTime', JSON.stringify(0), (err, res) => {
        });
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: width, alignItems: 'center', flex: 1 }}>
                <View style={styles.imgContainer}>
                    <Image source={logo} resizeMode='contain' style={{ width: '50%' }} />
                </View>
                <View style={{ paddingHorizontal: '5%', }}>
                    <Text style={{ fontSize: 18, }}>
                        - Craving a burger while wrapped in your PJs?
                    </Text>
                    <Text style={{ fontSize: 18, }}>
                        - Dinner party looming and the fridge echoing with emptiness?
                    </Text>
                    <Text style={{ fontSize: 18, }}>- Say goodbye to takeout menus and greasy phone calls, Limpopo!
                    </Text>
                    <Text style={{ fontSize: 18, }}>- Introducing Food Palace, your one-stop shop for culinary adventures, delivered straight to your door.
                    </Text>
                </View>
                <View style={{ marginTop: '6%' }} />
                <CustomeBtn name='Get started' onPress={navigateTo} />
                <View style={{ marginTop: '2%' }} />
            </View>
        </SafeAreaView>
    );
}