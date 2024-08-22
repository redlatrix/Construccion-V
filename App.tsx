import React from "react";
import { View, Text, FlatList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './UI/Login.js';
import Register from './UI/Register.js';
import Payment from './UI/Payment.js';
import ShoppingCar from './UI/ShoppingCar.js';
import ArticlesCard from './UI/ArticlesCard.js';
import ArticlesDetails from './UI/ArticlesDetails.js';
import ArticlesCategories from './UI/ArticlesCategories.js';
import MyShopping from './UI/MyShopping.js';
import MyFavourites from './UI/MyFavourites.js';
import Offers from './UI/Offers.js';
import Profile from './UI/Profile.js';
import Support from './UI/Support.js';
import ScreenList from "./UI/ScreenList";


const Stack = createNativeStackNavigator();



const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenList" component={ScreenList} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="ShoppingCar" component={ShoppingCar} />
        <Stack.Screen name="ArticlesCard" component={ArticlesCard} />
        <Stack.Screen name="ArticlesDetails" component={ArticlesDetails} />
        <Stack.Screen name="ArticlesCategories" component={ArticlesCategories} />
        <Stack.Screen name="MyShopping" component={MyShopping} />
        <Stack.Screen name="MyFavourites" component={MyFavourites} />
        <Stack.Screen name="Offers" component={Offers} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Support" component={Support} />
      </Stack.Navigator>



    </NavigationContainer>


  )
  
}
export default App