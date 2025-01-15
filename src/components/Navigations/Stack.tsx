import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Menu, Home} from '../../screens';

const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator initialRouteName="Home">
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <MainStack.Screen
      name="Options"
      component={Menu}
      options={{
        presentation: 'modal',
      }}
    />
  </MainStack.Navigator>
);

const StackNavigator = () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);

export default StackNavigator;
