import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles.js';


const ArticlesDetails = () => {

    return (
        <View >
            <View>
                <Image source={{ uri: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg' }} style={styles.imageDetails}></Image>
            </View>
            <View style={styles.row}>d
                <Text style={styles.title1}>Celular</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.subtitle}> Descripción: </Text>
                <Text style={styles.text2}>'Es un celular'</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.subtitle}> Valor: </Text>
                <Text style={styles.text2}>Es un celular</Text>
            </View>
            <TouchableOpacity style={styles.button}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('ShoppingCar')} >
                <Text style={styles.buttonText}>Agregar carrito</Text>
            </TouchableOpacity>
        </View>
    );
};
export default ArticlesDetails;