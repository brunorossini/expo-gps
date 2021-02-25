import React, { useState } from 'react';
import { Text, Button } from 'react-native';

import * as firebase from '../../services/firebase';

import { Container, TextInput } from './styles';

const SignUp: React.FC = ({ navigation }) => {
  const [email, setEmail] = useState('brunorossini@live.com');
  const [password, setPassword] = useState('123Mudar');

  const handleSubmit = async () => {
    await firebase.signUp({ email, password });

    navigation.navigate('SignIn');
  };

  return (
    <Container>
      <Text>SignUp Screen</Text>
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
      <Button title="Cadastrar" onPress={handleSubmit} />
      <Button title="Login" onPress={() => navigation.navigate('SignIn')} />
    </Container>
  );
};

export default SignUp;
