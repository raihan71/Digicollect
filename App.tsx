import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {menu} from './src/constants/menu';
import Icon from '@react-native-vector-icons/feather';

const styles = StyleSheet.create({
  paddingXy: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textGrey: {
    color: '#343434',
  },
  text16: {
    fontSize: 16,
  },
  clearFix: {
    backgroundColor: '#E2E2E2',
    height: StyleSheet.hairlineWidth,
  },
});

const RenderMenu = (
  <>
    {menu.map((item, index) => (
      <View key={index}>
        <TouchableOpacity
          style={styles.paddingXy}
          onPress={() => {
            ToastAndroid.show(
              `Berhasil sentuh ${item?.value}`,
              ToastAndroid.SHORT,
            );
          }}>
          <Text style={[styles.text16, styles.textGrey]}>{item?.label}</Text>
          <Icon name={item?.icon as any} size={20} />
        </TouchableOpacity>
        <View style={styles.clearFix} />
      </View>
    ))}
  </>
);

const App = () => {
  return <SafeAreaView>{RenderMenu}</SafeAreaView>;
};

export default App;
