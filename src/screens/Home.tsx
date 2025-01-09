import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Button,
  Alert,
  Text,
} from 'react-native';
import {MIN_SCREEN} from '../constants/common';
import {MenuInput} from '../components';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  borderImg: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: 'absolute',
    width: screen.width * MIN_SCREEN,
    height: screen.width * MIN_SCREEN,
  },
  txtHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4f6d7a',
    textAlign: 'center',
    paddingVertical: 20,
  },
  txtSubHeader: {
    textAlign: 'center',
    color: '#4f6d7a',
    paddingVertical: 10,
  },
  p20: {
    padding: 20,
  },
});

export const Home = () => {
  return (
    <View style={[styles.container, styles.justifyCenter]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <View
        style={[styles.alignCenter, styles.justifyCenter, styles.borderImg]}>
        <Image
          source={require('../assets/images/background.png')}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.txtHeader}>Currency Converter</Text>

      <MenuInput
        label="USD"
        inputType="numeric"
        onBtnPress={() => Alert.alert('usd')}
        onChangeText={(text: number) => console.log(text)}
        KeyboardType="numeric"
      />

      <MenuInput
        label="IDR "
        inputType="numeric"
        onBtnPress={() => Alert.alert('idr')}
        onChangeText={(text: number) => console.log(text)}
      />

      <Text style={styles.txtSubHeader}>
        1 USD = 16.000 IDR as of January 9, 2025
      </Text>

      <View style={styles.p20}>
        <Button color="#4f6d7a" title="Convert" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Home;
