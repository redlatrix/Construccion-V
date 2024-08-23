import { React, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from '../styles/globalStyles.js';

const Register = ({navigation}) => {

  const [user, setUser] = useState('');
  const [errorUser, setErrorUser] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
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

  const validateEmail = (text) => {
    setEmail(text);
    if (!text.includes('@')||!text.includes('.')) {
      setErrorEmail('El Email no es válido');
    } else {
      setErrorEmail('');
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
          placeholder="Email"
          value={email}
          onChangeText={validateEmail}
        />
        <Text style={styles.subInfo}>Max. 10 Caracteres </Text>
        {errorEmail ? <Text style={{ color: 'red' }}>{errorEmail}</Text> : null}

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

        <TextInput
          placeholder="Confirmar contraseña"
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
            title="Registrar Usuario" 
            onPress={() => navigation.navigate('Login')} 
        />
      </View>
      
    </View>
  );
};
export default Register;
