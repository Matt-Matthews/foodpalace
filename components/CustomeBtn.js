import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "../pages/styles";

export default function CustomeBtn({ name, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.customeBtn}>
      <Text style={styles.customeBtnText}>{name}</Text>
    </Pressable>
  );
}
