import { View, Text, SafeAreaView, useWindowDimensions } from "react-native";
import React, {useState} from "react";
import SecHeader from "../components/SecHeader";
import styles from "./styles";
import PaymentInput from "../components/PaymentInput";
import CustomeBtn from "../components/CustomeBtn";
import Logout from "../components/Logout";

export default function Payment({navigation}) {
    const {height, width} = useWindowDimensions();
    const [isPopUp, setIsPopUp] = useState(false);
    function toCart(){
        navigation.navigate('Cart')
      }
      function prevPage(){
        navigation.goBack();
      }
      function logout(){
        navigation.navigate('Login')
    }
  return (
    <SafeAreaView style={styles.container}>
      {isPopUp&&<Logout logout={logout} setIsPopUp={setIsPopUp} />}
        <View style={{marginTop: '8%'}}>
        
        <SecHeader setIsPopUp={setIsPopUp} toCart={toCart} prevPage={prevPage} />
        <Text style={{...styles.catText, marginLeft: '5%'}}>Payment</Text>
        <View style={{width: '100%', alignItems: 'center'}}>
            <PaymentInput placeholder='Bank name' />
            <PaymentInput placeholder='Card number' />
            <PaymentInput placeholder='Cvv' />
            <PaymentInput placeholder='Expiry date' />
        </View>
        <View style={{height: height *0.05}} />
        <Text style={{...styles.catPara, marginLeft: '5%'}}>Total Price: R50.00</Text>
        <View style={{height: height *0.05}} />
        <CustomeBtn name='Pay' onPress={()=>alert('PAyment successful')} />
        </View>
    </SafeAreaView>
  );
}
