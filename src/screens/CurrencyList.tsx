import React, {useContext} from 'react';
import {View, FlatList, StatusBar} from 'react-native';
import currencies from '../data/currencies.json';
import OptionsItem from '../components/OptionItem';
import Separator from '../components/OptionSepator';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {colors} from '../constants/colors';
import Icon from '@react-native-vector-icons/feather';
import {ConversionContext} from '../hooks/ConversionContext';

const CurrencyList = ({route}: any) => {
  const {currency, title} = route.params || {};
  const navigation = useNavigation<NavigationProp<any>>();
  const {setBaseCurrency, setQuoteCurrency} = useContext(ConversionContext);

  const handleSelectCurrency = (currency: string) => {
    title === 'Mata Uang Asal'
      ? setBaseCurrency(currency)
      : setQuoteCurrency(currency);
    navigation.navigate('Home');
  };
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({item}) => {
          const selected = currency === item;
          return (
            <OptionsItem
              icon={selected ? <Icon name="check-circle" size={25} /> : null}
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
