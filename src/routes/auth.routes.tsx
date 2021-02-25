import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Forgot from '../pages/Forgot';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
    <AuthStack.Screen name="Forgot" component={Forgot} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
