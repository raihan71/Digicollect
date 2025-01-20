import React, {ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface MenuListProps {
  label: string;
  icon?: ReactNode;
  onPress?: () => void;
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  grey: {
    color: '#343434',
  },
  size16: {
    fontSize: 16,
  },
});

export const MenuList = ({label, icon, onPress}: MenuListProps) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <Text style={[styles.grey, styles.size16]}>{label}</Text>
    {icon}
  </TouchableOpacity>
);
