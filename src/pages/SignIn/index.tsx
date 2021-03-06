import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { useAuth } from '../../contexts/auth';

import * as firebase from '../../services/firebase';

import { Container, TextInput } from './styles';

const SignIn: React.FC = ({ navigation }) => {
  const [email, setEmail] = useState('brunorossini@live.com');
  const [password, setPassword] = useState('123Mudar');

  const handleSign = () => {
    firebase.signIn({
      email,
      password,
    });
  };

  return (
    <Container>
      <TextInput
        value={email}
        onChangeText={value => setEmail(value)}
        placeholder="E-mail"
      />
      <TextInput
        value={password}
        onChangeText={value => setPassword(value)}
        placeholder="Password"
      />
      <Button title="Sign In" onPress={handleSign} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
      <Button title="Forgot" onPress={() => navigation.navigate('Forgot')} />
    </Container>
  );
};

export default SignIn;
