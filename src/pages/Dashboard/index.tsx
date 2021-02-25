import React, { useEffect } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import * as firebase from '../../services/firebase';
import { useAuth } from '../../contexts/auth';
import api from '../../services/api';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  async function teste() {
    const token = await firebase.getToken();
    // api.defaults.headers.Authorization = `Bearer ${token}`;
    const response = await api.get('/users');
    console.log(response.data);
  }

  useEffect(() => {
    teste();
  });

  function handleSignOut() {
    firebase.signOut();
  }

  return (
    <Container>
      <Text>{user?.name}</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </Container>
  );
};

export default Dashboard;
