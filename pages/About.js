import { View, Text, SafeAreaView, ScrollView, Image, useWindowDimensions, Pressable } from "react-native";
import React, {useState} from "react";
import styles from "./styles";
import SecHeader from "../components/SecHeader";
import img from '../assets/food/delicious-fried-chicken-plate.jpg';
import CustomeBtn from "../components/CustomeBtn";
import { Ionicons } from "@expo/vector-icons";
import Logout from "../components/Logout";


export default function About({navigation}) {
  const {height, width} = useWindowDimensions();
  const [isPopUp, setIsPopUp] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [initPrice,setInitPrice] = useState(50.00);
  const [totPrice,setTotPrice] = useState(initPrice);

  function handleQuantity(sign){
    if(sign==='-'){
      if(quantity != 1){
        setQuantity(prev=>prev - 1)
        setTotPrice(prev => prev - 50)
      }
    }else {
      setQuantity(prev=>prev + 1)
      setTotPrice(prev => prev + 50)
    }
  }

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
        <ScrollView>
          <View style={styles.infoImgCont}>
            <Image source={img} resizeMode="contain" style={{width: width* 0.75, height: height* 0.3}} />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoHeader}>
              <Text style={styles.catPara}>Fried chicken</Text>
              <Ionicons name={"md-heart"} size={20} color="black" />
              {/* "md-heart-outline" */}
            </View>
            <View style={{height: height *0.02}} />
            <Text style={{fontSize: 16}}>Delicious fried chicken</Text>
            <View style={{height: height *0.01}} />
            <Text>Lörem ipsum askbränd beligen tills fesk. 
                  Arabisk vår nivådat pofösm. 
                  Stjärnfamilj förlåtturné jodat grindstad. 
                  Autonat alig fön, juholtare. 
                  Antis vuxenmålarbok medan matnationalism. 
                  Milingar mjuta, och ell. 
                  Tren hamont därför att orade. 
                  Avis vuvuzela #metoo. 
                  Dyra vogt. Du kan vara drabbad. 
                  Poddtaxi beslutsblindhet den ställa frågor. 
            </Text>
            <View style={{height: height *0.01}} />
            <Text style={{fontSize: 16}}>R 50.00</Text>
            <View style={{height: height *0.04}} />
            <View style={styles.quantity}>
              <Text style={{fontSize: 16}}>Quantity: </Text>
              <View style={styles.quantityBtns}>
                <Pressable onPress={()=>handleQuantity('-')} style={styles.quantityBtn}>
                  <Text style={styles.quantityBtnTxt}>-</Text>
                </Pressable>
                <Text>{quantity}</Text>
                <Pressable onPress={()=>handleQuantity('+')} style={styles.quantityBtn}>
                  <Text style={styles.quantityBtnTxt}>+</Text>
                </Pressable>
              </View>
            </View>
            <View style={{height: height *0.05}} />
            <Text style={styles.catPara}>Total Price: R{totPrice.toFixed(2)}</Text>
            <View style={{height: height *0.05}} />
          </View>

          <CustomeBtn name='Add to cart' onPress={()=>alert('Item added')} />
        </ScrollView>
        </View>
    </SafeAreaView>
  );
}
