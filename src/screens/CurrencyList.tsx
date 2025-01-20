import React from 'react';
import {
  FlatList,
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import currencies from '../datas/currencies.json';
import {MenuList, MenuSeparator} from '../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import Icon from '@react-native-vector-icons/feather';

const styles = StyleSheet.create({
  bgWhite: {
    backgroundColor: '#fff',
  },
});

interface CurrencyListProps {
  navigation: NavigationProp<any>;
  route: RouteProp<any, any>;
}

const Separtor = () => {
  return <MenuSeparator />;
};

const PaddingButtom = ({insets}: any) => (
  <View style={{height: insets.bottom}} />
);

const Currencies = ({item, params, navigation}: any) => {
  const selected = params?.selectedCurrency === item;
  const handleSelected = () => {
    if (params?.onChange) {
      params.onChange(item);
      navigation.goBack();
    }
  };
  return (
    <MenuList
      label={item}
      onPress={handleSelected}
      icon={selected && <Icon name="check-circle" size={30} />}
    />
  );
};

const CurrencyList = ({navigation, route}: CurrencyListProps) => {
  const insets = useSafeAreaInsets();
  const {params} = route;

  return (
    <SafeAreaView style={styles.bgWhite}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <FlatList
        data={currencies}
        renderItem={({item}) => Currencies({item, params, navigation})}
        ItemSeparatorComponent={() => Separtor()}
        keyExtractor={item => item}
        ListFooterComponent={() => PaddingButtom({insets})}
      />
    </SafeAreaView>
  );
};

export default CurrencyList;
