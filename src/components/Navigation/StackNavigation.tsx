import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../../screens/Home';
import Options from '../../screens/Options';
import CurrencyList from '../../screens/CurrencyList';
import BtnClose from '../Button';

const StackNavigator = createStackNavigator();

const StackScreen = () => (
  <StackNavigator.Navigator initialRouteName="Home">
    <StackNavigator.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
    <StackNavigator.Screen
      name="Setting"
      component={Options}
      options={{presentation: 'modal'}}
    />
    <StackNavigator.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({navigation, route}: any) => ({
        title: `${route.params.title}`,
        presentation: 'modal',
        headerLeft: () => null,
        headerTitleAlign: 'center',
        headerRight: () => (
          <BtnClose
            icon="x"
            handlePress={() => navigation.goBack()}
            style={{padding: 20}}
            size={25}
          />
        ),
      })}
    />
  </StackNavigator.Navigator>
);

const StackNavigation = () => (
  <NavigationContainer>
    <StackScreen />
  </NavigationContainer>
);

export default StackNavigation;
