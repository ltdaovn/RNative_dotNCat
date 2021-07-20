import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../../screens/Welcome';
import Main from '../../screens/Main';


const Tab = createBottomTabNavigator();


const Footer = () => {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Welcome" component={Welcome} />
            <Tab.Screen name="Settings" component={Main} />
          </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Footer