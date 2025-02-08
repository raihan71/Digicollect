import React from 'react';
import {View, Text, FlatList, StatusBar} from 'react-native';
import currencies from '../data/currencies.json';
import OptionsItem from '../components/OptionItem';
import Separator from '../components/OptionSepator';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {colors} from '../constants/colors';

const CurrencyList = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const handleSelectCurrency = (currency: string) => {
    navigation.navigate('Home', {currency});
    console.log(currency);
  };
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({item}) => {
          return (
            <OptionsItem text={item} onTap={() => handleSelectCurrency(item)} />
          );
        }}
        ItemSeparatorComponent={Separator}
        keyExtractor={item => item}
        ListFooterComponent={<View style={{height: 'auto'}} />}
      />
    </View>
  );
};

export default CurrencyList;
