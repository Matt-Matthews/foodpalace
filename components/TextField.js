import { View, Text, useWindowDimensions, TextInput, Pressable } from "react-native";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "../pages/styles";
import { sendSignInLinkToEmail } from "firebase/auth";

export default function TextField({ icon, placeholder, returnKeyType, name, setValue, isSecure = false }) {
  const { height, width } = useWindowDimensions();
  const [isPass, setIsPass] = React.useState(true);
  return (
    <View style={[styles.textField, {}]}>
      <Ionicons name={icon} size={20} color="black" />
      <TextInput style={styles.textInput} nativeID={name} onChangeText={text => setValue(text)} returnKeyType={returnKeyType} placeholder={placeholder} secureTextEntry={isSecure && isPass} />
      {isSecure && <Pressable onPress={() => setIsPass(val => !val)}>
        <Ionicons name={!isPass ? 'eye' : 'eye-off'} size={20} color="black" /></Pressable>}
    </View>
  );
}
