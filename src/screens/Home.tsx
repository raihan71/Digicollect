import React from 'react';
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
        editable={false}
        handleTargetCurrency={() =>
          navigation.navigate('CurrencyList', {
            title: 'Mata Uang Asal',
          })
        }
        handleSourceCurrency={() =>
          navigation.navigate('CurrencyList', {
            title: 'Mata Uang Tujuan',
          })
        }
        submitTxt="Ubah Mata Uang"
      />
    </View>
  );
};

export default Home;
