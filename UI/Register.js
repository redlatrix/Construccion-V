import { React, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
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
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title1}>Registrar usuario</Text>
      </View>
      <View>
        <TextInput style={styles.input}
          placeholder="Usuario"
          value={user}
          onChangeText={validateUser}
        />
        <Text style={styles.validationText}>Max. 10 Caracteres </Text>
        {errorUser ? <Text style={{ color: 'red' }}>{errorUser}</Text> : null}

        <TextInput style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={validateEmail}
        />
        <Text style={styles.validationText}>Max. 10 Caracteres </Text>
        {errorEmail ? <Text style={{ color: 'red' }}>{errorEmail}</Text> : null}

        <TextInput style={styles.input}
          placeholder="Contraseña"
          value={password}
          secureTextEntry={true}
          onChangeText={validatePassword}
        />
        <Text style={styles.validationText}>Max. 8 Caracteres </Text>
        <Text style={styles.validationText}>debe incluir: 1 Mayúsculas </Text>
        <Text style={styles.validationText}>debe incluir: 1 caracter especial </Text>
        <Text style={styles.validationText}>letras y números </Text>
        
        {errorPasword ? <Text style={{ color: 'red' }}>{errorPasword}</Text> : null}

        <TextInput style={styles.input}
          placeholder="Confirmar contraseña"
          value={password}
          secureTextEntry={true}
          onChangeText={validatePassword}
        />
        <Text style={styles.validationText}>Max. 8 Caracteres </Text>
        <Text style={styles.validationText}>debe incluir: 1 Mayúsculas </Text>
        <Text style={styles.validationText}>debe incluir: 1 caracter especial </Text>
        <Text style={styles.validationText}>letras y números </Text>
        
        {errorPasword ? <Text style={{ color: 'red' }}>{errorPasword}</Text> : null}

        <TouchableOpacity style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Login')} >
          <Text style={styles.buttonText}>Registrar Usuario</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};
export default Register;
