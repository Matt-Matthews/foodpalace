import { View, Text, ScrollView, useWindowDimensions, Image, Pressable} from "react-native";
import React, {useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatGrid } from 'react-native-super-grid';

import styles from "./styles";
import banner from '../assets/banner.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import Banner from '../components/Banner';
import Categories from "../components/Categories";
import Header from "../components/Header";
import image1 from '../assets/food/delicious-fried-chicken-plate.jpg';
import image2 from '../assets/food/Pancake_Raspberry_Strawberry_White_background_526470_1280x853.jpg';
import image3 from '../assets/food/wallpaperflare.com_wallpaper1.jpg';
import image4 from '../assets/food/wallpaperflare.com_wallpaper.jpg';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home({navigation}) {
    const {height,width} = useWindowDimensions();
    const [scrolled,setScrolled] = useState(false);
    const [offset, setOffset] = useState(width * 0.9);
    const [scrollCounter,setScrollCounter] = useState(1);
    const [isDone,setIsDone] = useState(false);
    const [cartValue,setCartValue] = useState(1);

    const scrollRef = useRef();
    function moreInfo(){
        navigation.navigate('About');
    }

    const [items, setItems] = React.useState([
        {img: image1, title: 'Fried chicken', describtion: 'Delicious fried chicken', price: 'R 50.00',liked: false, id: 0},
        {img: image2, title: 'Pan cakes', describtion: 'Strawberry flavoured', price: 'R 30.00',liked: true, id: 1},
        {img: image3, title: 'Nuggets', describtion: 'With french fries', price: 'R 65.00',liked: false, id: 2},
        {img: image4, title: 'Fish', describtion: 'Delicious fried fish', price: 'R 55.00',liked: false, id: 3},
        {img: image1, title: 'Fried chicken', describtion: 'Delicious fried chicken', price: 'R 50.00',liked: false, id: 4},
        {img: image2, title: 'Pan cakes', describtion: 'Strawberry flavoured', price: 'R 30.00',liked: true, id: 5},
        {img: image3, title: 'Nuggets', describtion: 'With french fries', price: 'R 65.00',liked: false, id: 6},
        {img: image4, title: 'Fish', describtion: 'Delicious fried fish', price: 'R 55.00',liked: false, id: 7},
      ]);

      function like(id){
        let temp =  items.map(item=>{
                if(item.id === id){
                    return {
                        ...item, liked: !item.liked
                    }
                }
                return item;
            });
        
        setItems(temp);
      }

      function handleScroll(event){
        if(event.y > 205){
            setScrolled(true)
        }else{
            setScrolled(false);
        }
        
      }
      
      function manualScroll(event){
        const scrollValue = width * 0.9;
        let num = Math.round((parseFloat(event.x)/scrollValue)+1);
        setIsDone(false);
        setScrollCounter(num);
        setOffset(parseFloat(event.x));
      }

      function autoScroll(){
        const scrollValue = width * 0.9;
        if (scrollCounter > 0 &&scrollCounter < 3 && !isDone) {
            setOffset(prev => prev + scrollValue);
            scrollRef.current.scrollTo({ x: offset });
            setScrollCounter(prev => prev + 1);
            if (scrollCounter === 2) {
                setIsDone(true);
            } 
        } 
        else if(isDone || (!isDone&&scrollCounter===3)) {
            setOffset(scrollValue);
            scrollRef.current.scrollTo({ x: 0 });
            setScrollCounter(1);
            setIsDone(false);
        }

      }

     useEffect(()=>{
        // console.log(width * 0.9);
        if (scrollCounter === 1) {
            setIsDone(false);
        }
        if(scrollCounter === 2){
            
        }

        const interval = setTimeout(() => {
            autoScroll();
         }, 3000)
        return () => clearInterval(interval);
    },[scrollCounter,isDone])

    const images = [{
        img: banner,
    },
    {
        img: banner2,
    },
    {
        img: banner3,
    },
]
   
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <View style={{...styles.cover,width: width}} />
            <Header cartValue={cartValue} />
        </View>
        <ScrollView stickyHeaderIndices={[1]} onScroll={(e)=>handleScroll(e.nativeEvent.contentOffset)} nestedScrollEnabled showsVerticalScrollIndicator={false}>
            

            <View style={{...styles.carouselContainer,height: height * 0.22}}>
                 <ScrollView 
                 style={{...styles.carouselScroller, width: width * 0.9}} 
                 showsHorizontalScrollIndicator={false} 
                 horizontal 
                 pagingEnabled
                 ref={scrollRef}
                 onMomentumScrollEnd={(e)=>manualScroll(e.nativeEvent.contentOffset)}
                 >{
                    images.map((item, index)=>{
                        return <Banner key={index} banner={item.img} />
                    })
                 }
                 </ScrollView>
                 <Text style={styles.counter}>{scrollCounter}/3</Text>
            </View>

            <View style={{width: width * 0.9, marginHorizontal: width * 0.05,backgroundColor:'#fff', position: 'relative'}}>
                <View style={[{...styles.cover,width: width,},scrolled?styles.shadow: styles.noShadow]} />
                <Text style={styles.catText}>Categories</Text>
                <Categories />
            </View>

            <View style={styles.foodContainer}>
                <FlatGrid
                    itemDimension={width * 0.3}
                    data={items}
                    style={styles.gridView}
                    spacing={width * 0.05}
                    renderItem={({ item }) => (
                        <Pressable onPress={moreInfo} style={[styles.itemContainer,{height: height * 0.27}]}>
                            <Image source={item.img} style={{width: '90%', height: '50%', marginTop: '10%'}} />
                            <View style={styles.foodDetails}>
                                <Text style={styles.itemName}>{item.title}</Text>
                                <Text style={styles.itemCode}>{item.describtion}</Text>
                                <Text style={styles.itemPrice}>{item.price}</Text>
                            </View>
                            <Pressable style={styles.heart} onPress={()=>like(item.id)}>
                            <Ionicons name={item.liked?"md-heart":"md-heart-outline"} size={20} color="black" />
                            </Pressable>
                            
                        </Pressable>
                    )}
                />
            </View>
            
        </ScrollView>
    </SafeAreaView>
  );
}

