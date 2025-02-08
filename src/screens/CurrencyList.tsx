import React from 'react';
import {View, FlatList, StatusBar} from 'react-native';
import currencies from '../data/currencies.json';
import OptionsItem from '../components/OptionItem';
import Separator from '../components/OptionSepator';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {colors} from '../constants/colors';
import Icon from '@react-native-vector-icons/feather';

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
            <OptionsItem
              icon={<Icon name="check-circle" size={25} />}
              text={item}
              onTap={() => handleSelectCurrency(item)}
            />
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
