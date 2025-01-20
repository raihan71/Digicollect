import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Button,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {MIN_SCREEN} from '../constants/common';
import {MenuInput} from '../components';
import {KeyboardSpacer} from '../components/KeyboardSpace';
import Icon from '@react-native-vector-icons/feather';
import {NavigationProp} from '@react-navigation/native';
import dayjs from 'dayjs';
import {currencyFormat} from '../utils/currencyFormat';

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
  p10: {
    padding: 10,
  },
  ptAuto: {
    paddingTop: screen.height * 0.1,
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  bgRed: {
    backgroundColor: 'red',
  },
  bgBlue: {
    backgroundColor: 'blue',
  },
});

interface HomeProps {
  navigation: NavigationProp<any>;
}

export const Home = ({navigation}: HomeProps) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('IDR ');
  const [baseValue, setBaseValue] = useState('1');
  const [scrollEnable, setScrollEnable] = useState(false);

  const rates = 16360;
  const dateNow = new Date();

  const handleReverseCurrency = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <SafeAreaView style={[styles.alignItemsEnd, styles.p10]}>
        <TouchableOpacity
          hitSlop={20}
          onPress={() => navigation.navigate('Options')}>
          <Icon name="settings" size={30} color="#4f6d7a" />
        </TouchableOpacity>
      </SafeAreaView>
      <ScrollView scrollEnabled={scrollEnable}>
        <View>
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
            label={baseCurrency}
            inputType="numeric"
            onBtnPress={() =>
              navigation.navigate('CurrencyList', {
                title: 'Currency Base',
                selectedCurrency: baseCurrency,
                onChange: (val: any) => setBaseCurrency(val),
              })
            }
            onChangeText={(text: string) => setBaseValue(text)}
            KeyboardType="numeric"
            value={baseValue}
          />
          <MenuInput
            editable={false}
            label={targetCurrency}
            inputType="numeric"
            onBtnPress={() =>
              navigation.navigate('CurrencyList', {
                title: 'Currency Target',
                selectedCurrency: targetCurrency,
                onChange: (val: any) => setTargetCurrency(val),
              })
            }
            value={
              baseValue &&
              `${currencyFormat((parseFloat(baseValue) * rates).toFixed(2))}`
            }
          />
          <Text style={styles.txtSubHeader}>
            1 {baseCurrency} = {currencyFormat(rates)} {targetCurrency} as{' '}
            {dayjs(dateNow).format('DD MMMM YYYY')}
          </Text>
          <View style={styles.p20}>
            <Button
              color="#4f6d7a"
              title="Reverse"
              onPress={handleReverseCurrency}
            />
          </View>
          <KeyboardSpacer onToggle={isVisble => setScrollEnable(isVisble)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
