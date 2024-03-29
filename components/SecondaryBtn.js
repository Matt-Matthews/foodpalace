import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "../pages/styles";

export default function SecondaryBtn({ name, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.secBtn} >
      <Text style={styles.secBtnBtnText}>{name}</Text>
    </Pressable>
  );
}
