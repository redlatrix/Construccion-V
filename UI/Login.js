import { React, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from '../styles/globalStyles.js';

const Login = ({navigation}) => {

  const [user, setUser] = useState('');
  const [errorUser, setErrorUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorPasword, setErrorPassword] = useState('');

  const validateUser = (text) => {
    setUser(text);
    if (text.length>10) {
      setErrorUser('El User no es válido');
    } else {
      setErrorUser('');
    }
  };
  const validatePassword = (text) => {
    const validatorRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/g;
    setPassword(text);
    if (text.length>8 || !text.match(validatorRegex) || !text.match(/[0-9]|[A-Z]/g) ) {
      setErrorPassword('La contraseña no es valida');
    } else {
      setErrorPassword  ('');
    }
  };

  return (
    <View>
      <View>
        <Text style={styles.title}>Iniciar Sesion</Text>
      </View>
      <View>
        <TextInput
          placeholder="Usuario"
          value={user}
          onChangeText={validateUser}
        />
        <Text style={styles.subInfo}>Max. 10 Caracteres </Text>
        {errorUser ? <Text style={{ color: 'red' }}>{errorUser}</Text> : null}
        <TextInput
          placeholder="Contraseña"
          value={password}
          secureTextEntry={true}
          onChangeText={validatePassword}
        />
        <Text style={styles.subInfo}>Max. 8 Caracteres </Text>
        <Text style={styles.subInfo}>debe incluir: 1 Mayúsculas </Text>
        <Text style={styles.subInfo}>debe incluir: 1 caracter especial </Text>
        <Text style={styles.subInfo}>letras y números </Text>
        
        {errorPasword ? <Text style={{ color: 'red' }}>{errorPasword}</Text> : null}
        <Button 
            title="Iniciar sesión" 
            onPress={() => navigation.navigate('ScreenList')} 
        />
        <Button 
            title="Registrar Usuario" 
            onPress={() => navigation.navigate('Register')} 
        />
      </View>
      
    </View>
  );
};
export default Login;
