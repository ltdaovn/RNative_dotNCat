import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import Welcome from './src/screens/Welcome';
import Main from './src/screens/Main';
import Splash from './src/screens/Splash';

import SplashImage from './src/img/splash.jpg'

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
              name = "Splash"
              component={ Splash }
              options={
                {
                  header: () => null,
                }
              }
            />
            <Stack.Screen
              name = "Welcome"
              component={ Welcome }
              options={
                {
                  header: () => null,
                }
              }
            />
            <Stack.Screen
              name="Main"
              component= { Main }
              options={
                {
                  header: () => null
                }
              }
            />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


