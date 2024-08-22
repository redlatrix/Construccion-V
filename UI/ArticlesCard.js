import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import styles from '../styles/globalStyles.js';
import ShoppingCar from './ShoppingCar.js';
import {useNavigation} from '@react-navigation/native'
const ArticlesCard = ({article}) =>{

    const nav = useNavigation();

    onNavigate = () => {
        nav.navigate('ShoppingCar')
    }
    return(
        <View style={styles.card}>
            <Image source={{uri:article.articlePicture}} style={styles.picture}/>
            <Text style={styles.name}> Nombre del producto: {article.articleName}</Text>
            <Text> Descripcion del producto: {article.articleDescription}</Text>
            <Text> Valor: {article.articlePrice}</Text>
            <Button 
                title="Agregar carrito" 
                onPress={onNavigate}
            />
        </View>
    );
};
export default ArticlesCard;