import React from 'react';
import {
  Alert,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import {menu} from '../constants/menu';
import Icon from '@react-native-vector-icons/feather';
import {MenuList, MenuSeparator} from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const handleOpenUrl = (url: string) => {
  Linking.openURL(url).catch(() => {
    Alert.alert('Failed to open the page', 'Please try again later');
    ToastAndroid.show('Failed to open the page', ToastAndroid.SHORT);
  });
};

const RenderMenu = (
  <ScrollView>
    {menu.map((item, index) => (
      <React.Fragment key={index}>
        <MenuList
          label={item?.label}
          onPress={() => handleOpenUrl(item?.url)}
          icon={<Icon name={item?.icon as any} size={20} />}
        />
        <MenuSeparator />
      </React.Fragment>
    ))}
  </ScrollView>
);

const Menu = () => {
  return <SafeAreaView style={styles.container}>{RenderMenu}</SafeAreaView>;
};

export default Menu;
