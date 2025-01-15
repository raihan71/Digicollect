import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Button,
  Alert,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {MIN_SCREEN} from '../constants/common';
import {MenuInput} from '../components';
import {KeyboardSpacer} from '../components/KeyboardSpace';
import Icon from '@react-native-vector-icons/feather';

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
  ptAuto: {
    paddingTop: screen.height * 0.1,
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
});

interface HomeProps {
  navigation: any;
}

export const Home = ({navigation}: HomeProps) => {
  const [scrollEnable, setScrollEnable] = useState(false);
  return (
    <View style={[styles.container]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <SafeAreaView style={[styles.alignItemsEnd, styles.p20]}>
        <TouchableOpacity onPress={() => navigation.push('Options')}>
          <Icon name="settings" size={40} color="#4f6d7a" />
        </TouchableOpacity>
      </SafeAreaView>
      <ScrollView scrollEnabled={scrollEnable}>
        <View style={styles.ptAuto}>
          <View
            style={[
              styles.alignCenter,
              styles.justifyCenter,
              styles.borderImg,
            ]}>
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
            <Button color="#4f6d7a" title="Revert" onPress={() => {}} />
          </View>

          <KeyboardSpacer onToggle={isVisble => setScrollEnable(isVisble)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
