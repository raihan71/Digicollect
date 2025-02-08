import Icon from '@react-native-vector-icons/feather';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const Button = ({txt, handlePress, icon, style, size}: any) => {
  return (
    <TouchableOpacity onPress={handlePress} style={style}>
      <Icon name={icon} size={size} />
    </TouchableOpacity>
  );
};

export default Button;
