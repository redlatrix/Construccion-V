import {React} from 'react';
import {View, Text, Image, Button, TextInput, FlatList} from 'react-native';
import styles from '../styles/globalStyles.js';

const articles = [
  {
    id: 1,
    articlePicture:
      'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
    articleName: 'Celular',
    articleDescription: 'Es un celular',
    articleValue: 1500000,
    articleOffer: '15%',
    totalValue: 1275000
  },
];

const Item = ({article}) => (
  <View style={styles.card}>
    <Image source={{uri: article.articlePicture}} style={styles.picture} />
    <Text style={styles.name}> Nombre del producto: {article.articleName}</Text>
    <Text> Descripcion del producto: {article.articleDescription}</Text>
    <Text> Valor total: {article.articleValue}</Text>
    <Text> Descuento: {article.articleOffer}</Text>
    <Text style={styles.title}> Valor con descuento: {article.totalValue}</Text>
  </View>
);

const ArticlesDetails = () => {

  return (
    <View>
      <View>
        <Text style={styles.title}>Mi carrito de compras</Text>
      </View>
      <FlatList
        data={articles}
        renderItem={({item}) => <Item article={item} />}
        keyExtractor={article => article.id.toString()}
      />

    </View>
  );
};
export default ArticlesDetails;
