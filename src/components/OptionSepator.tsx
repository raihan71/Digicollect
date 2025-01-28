import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {colors} from '../constants/colors';

const styles = StyleSheet.create({
  sepator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.grey,
  },
});

const Separator = () => <View style={styles.sepator} />;

export default Separator;
