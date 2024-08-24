import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from '../styles/globalStyles.js';

const articles = [
    {
      id: 1,
      articlePicture:
        'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
      articleName: 'Celular',
      articleCant: 2,
      articleValue: 1500000,
    },
  ];
  
  const Item = ({article}) => (
    <View style={styles.card}>
      <Image source={{uri: article.articlePicture}} style={styles.picture} />
      <Text style={styles.name}> Nombre del producto: {article.articleName}</Text>
      <Text> Cantidad {article.articleCant}</Text>
      <Text> Valor: {article.articleValue*articleCant}</Text>
    </View>
  );

const Payment = () =>{
    return (
        <View>
          <View>
        <Text style={styles.title}>Sucursal de pago</Text>
      </View>
          <FlatList
            data={articles}
            renderItem={({item}) => <Item article={item} />}
            keyExtractor={article => article.id.toString()}
          />

            {/* <Text> ingrese la cantidad</Text>
          <TextInput
            placeholder="ingrese la cantidad"
            value={cant}
            maxLength={2}
            keyboardType="numeric" // Muestra el teclado numérico
            onChangeText={validateCant}
          />
          {errorCant ? <Text style={{ color: 'red' }}>{errorCant}</Text> : null} */}
    
          {/* <Button
            title="Agregar carrito"
            onPress={() => navigation.navigate('Payment')}
          /> */}
        </View>
      );
};
export default Payment;