import React, {useContext, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
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
  const {baseCurrency, quoteCurrency, swapCurrencies} =
    useContext(ConversionContext);
  const [base, setBase] = useState('1');
  const rates = 16.275;

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
      <FormCurrency
        baseValue={base}
        editable={false}
        baseCurrency={baseCurrency}
        onBtnBaseCurrency={() =>
          navigation.navigate('CurrencyList', {
            title: 'Mata Uang Asal',
            currency: baseCurrency,
          })
        }
        onBtnTargetCurrency={() =>
          navigation.navigate('CurrencyList', {
            title: 'Mata Uang Tujuan',
            currency: quoteCurrency,
          })
        }
        rates={rates}
        setBaseValue={(val: string) => setBase(val)}
        submitTxt="Ubah Mata Uang"
        swapCurrencies={() => swapCurrencies()}
        targetCurrency={quoteCurrency}
      />
    </View>
  );
};

export default Home;
