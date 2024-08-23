import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from '../styles/globalStyles.js';
import ArticlesCard from './ArticlesCard';
import ScreenList from './ScreenList.js'

const Login = ({navigation}) => {

  // onNavigate = () =>{
  //   navigation.navigate('ShoppingCar')
  // }
  
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
            name = 'conaji'
            title="Iniciar sesión" 
            onPress={() => navigation.navigate('ScreenList')} 
        />
      </View>
    </View>
  );
};
export default Login;
