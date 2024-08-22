import React from "react";
import {View,Text, FlatList} from 'react-native'
import ArticlesCard from "./UI/ArticlesCard";


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
const App = () => {
  return (
    <View>
      <Text> App Meli</Text>
      <FlatList
        data={articles}
        renderItem={({item}) => <ArticlesCard article={item}/>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  ) 
}
export default App