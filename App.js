import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Intro from './pages/Intro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { useEffect } from 'react';

console.disableYellowBox = true;
LogBox.ignoreAllLogs();

export default function App() {
  const Stack = createNativeStackNavigator();
  const [isFirstTime, setIsFirstTime] = useState(1);
  useEffect(() => {
    AsyncStorage.getItem('isFirstTime', (err, res) => {
      setIsFirstTime(res || 1)
    })
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
        {isFirstTime === 1 && <Stack.Screen
          name="Intro"
          component={Intro}
        />}
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="About"
          component={About}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
