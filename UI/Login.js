import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from '../styles/globalStyles.js';
import ArticlesCard from './ArticlesCard';

const Login = ({navigation}) => {
  return (
    <View>
      <View>
        <Text style={styles.title}>Iniciar Sesion</Text>
      </View>
      <View>
        <TextInput
          placeholder="Correo electrónico"
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
        />
        <Button 
            title="Iniciar sesión" 
            onPress={() => navigation.navigate('ShoppingCar')} 
        />
      </View>
    </View>
  );
};
export default Login;
