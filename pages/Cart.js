import { View, Text, SafeAreaView, ScrollView, useWindowDimensions } from "react-native";
import React, {useState} from "react";
import styles from "./styles";
import SecHeader from "../components/SecHeader";
import CustomeBtn from "../components/CustomeBtn";
import Card from "../components/Card";
import Logout from "../components/Logout";

export default function Cart({navigation}) {
    const {height, width} = useWindowDimensions();
    const [isPopUp, setIsPopUp] = useState(false);
    function toPayment(){
        navigation.navigate('Payment')
      }
      function prevPage(){
        navigation.goBack();
      }
      function logout(){
        navigation.navigate('Login')
    }
    function about(){
      navigation.navigate('About')
  }
  return (
    <SafeAreaView style={styles.container}>
      {isPopUp&&<Logout logout={logout} setIsPopUp={setIsPopUp} />}
        <View style={{marginTop: '8%'}}>
        
        <SecHeader setIsPopUp={setIsPopUp} prevPage={prevPage} />
       
        <ScrollView style={{width: width, height: height*0.80,}}>
        <Text style={{...styles.catText, marginLeft: '5%'}}>Cart</Text>
         <Card about={about} />
         <Card about={about} />  
        </ScrollView>
        <View style={{elevation: 6, backgroundColor:'#fff'}}>
        <View style={{width: width*0.9, marginHorizontal: width*0.05}}>
            <Text style={styles.catPara}>Total Price: R50.00</Text>
            <View style={{height: height *0.05}} />
        </View>
        
        <CustomeBtn name='Checkout' onPress={toPayment} />
        <View style={{height: height *0.05, width: '100%', backgroundColor: '#fff'}} />
        </View>
        </View>
    </SafeAreaView>
  );
}
