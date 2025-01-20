import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Menu, Home, CurrencyList} from '../../screens';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from '@react-native-vector-icons/feather';

const MainStack = createStackNavigator();

const styles = StyleSheet.create({
  px5: {
    paddingHorizontal: 5,
  },
});

const ButtonClose = ({navigation}: any) => (
  <TouchableOpacity
    hitSlop={20}
    style={styles.px5}
    onPress={() => navigation.goBack()}>
    <Icon name="x" size={30} />
  </TouchableOpacity>
);

const MainStackScreen = () => (
  <MainStack.Navigator initialRouteName="Home">
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <MainStack.Screen name="Options" component={Menu} />
    <MainStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({navigation, route}) => ({
        title: (route.params as {title: string}).title,
        presentation: 'modal',
        headerTitleAlign: 'center',
        headerLeft: () => null,
        headerRight: () => ButtonClose({navigation}),
      })}
    />
  </MainStack.Navigator>
);

const StackNavigator = () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);

export default StackNavigator;
