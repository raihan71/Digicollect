import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  clear: {
    backgroundColor: '#E2E2E2',
    height: StyleSheet.hairlineWidth,
  },
});

export const MenuSeparator = () => <View style={styles.clear} />;
