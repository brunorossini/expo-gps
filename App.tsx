import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as fb from 'firebase';

import { AuthProvider } from './src/contexts/auth';

import Routes from './src/routes';
import firebaseConfig from './src/config/firebase';

// import { Container } from './styles';

export const firebase = !fb.apps.length
  ? fb.initializeApp(firebaseConfig)
  : fb.app();

const App: React.FC = () => {
  // useEffect(() => {
  //   console.log(`fLength: ${firebase.apps.length}`);
  //   if (!firebase.apps.length) {
  //     firebase.initializeApp(firebaseConfig);
  //   }
  // }, []);

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
