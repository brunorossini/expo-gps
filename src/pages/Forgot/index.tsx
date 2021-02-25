import React, { useState } from 'react';
import { Button } from 'react-native';

import { Container, TextInput } from './styles';

const Forgot: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <Container>
      <TextInput
        value={email}
        onChangeText={value => setEmail(email)}
        placeholder="E-mail"
      />
      <Button title="Recuperar" onPress={handleSubmit} />
    </Container>
  );
};

export default Forgot;
