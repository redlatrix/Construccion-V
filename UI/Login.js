import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from '../globalStyles.js';
import ArticlesCard from './ArticlesCard';

const Login = () => {
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
        />
        <Button 
            title="Iniciar sesión" 
            onPress={() => {<ArticlesCard/>}} 
        />
      </View>
    </View>
  );
};
export default Login;
