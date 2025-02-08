import React, {ReactNode} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../constants/colors';
import Separator from './OptionSepator';

interface OptionsItemProps {
  icon?: ReactNode;
  text: string;
  onTap?: () => void;
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
});

const OptionsItem = ({text, icon, onTap}: OptionsItemProps) => {
  return (
    <>
      <TouchableOpacity style={styles.row} onPress={onTap}>
        <Text>{text}</Text>
        {icon}
      </TouchableOpacity>
    </>
  );
};

export default OptionsItem;
