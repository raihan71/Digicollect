import React, {useContext, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from '@react-native-vector-icons/feather';
import {colors} from '../constants/colors';
import FormCurrency from '../components/Form';
import {ConversionContext} from '../hooks/ConversionContext';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteOff,
    flex: 1,
    paddingVertical: 10,
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  bgLogo: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  btnOptions: {
    alignItems: 'flex-end',
    padding: 20,
  },
});

const Home = ({navigation}: any) => {
  const {baseCurrency, quoteCurrency, swapCurrencies, date, rates, isLoading} =
    useContext(ConversionContext);
  const [value, setValue] = useState('1');
  const conversionRate = rates[quoteCurrency];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.whiteOff} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Setting')}
        style={styles.btnOptions}>
        <Icon name="settings" size={30} color={colors.matcha} />
      </TouchableOpacity>
      <View style={styles.imgContainer}>
        <Image
          style={styles.bgLogo}
          source={require('../assets/images/background.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
          resizeMode="contain"
        />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.matcha} />
      ) : (
        <FormCurrency
          baseCurrency={baseCurrency}
          baseValue={value}
          editable={false}
          dateNow={date}
          onBtnBaseCurrency={() =>
            navigation.navigate('CurrencyList', {
              title: 'Mata Uang Asal',
              currency: baseCurrency,
              isBaseCurrency: true,
            })
          }
          onBtnTargetCurrency={() =>
            navigation.navigate('CurrencyList', {
              title: 'Mata Uang Tujuan',
              currency: quoteCurrency,
              isBaseCurrency: false,
            })
          }
          submitTxt="Ubah Mata Uang"
          rates={conversionRate}
          setBaseValue={(val: any) => setValue(val)}
          swapCurrencies={() => swapCurrencies()}
          targetCurrency={quoteCurrency}
        />
      )}
    </View>
  );
};

export default Home;
