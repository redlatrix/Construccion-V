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

const articles = [
  {
    id: 1,
    articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
    articleName: 'Celular',
    articleDescription: 'Es un celular',
    articleValue: 1500000
  },
  {
    id: 2,
    articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',
    articleName: 'Computador',
    articleDescription: 'Es un computador',
    articleValue: 3500000
  },
];
// const list = () => {
//   return (
//     <View>
//       <Text> App Meli</Text>
//       <FlatList
//         data={articles}
//         renderItem={({ item }) => <ArticlesCard article={item} />}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   )
// }
const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenList" component={ScreenList} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="ShoppingCar" component={ShoppingCar} />
        {/* <Stack.Screen name="ArticlesCard" component={ArticlesCard} /> */}
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