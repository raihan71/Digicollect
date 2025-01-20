import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface MenuInputProps {
  label?: string;
  value?: string;
  onBtnPress?: () => void;
  editable?: boolean;
  inputType: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  [x: string]: any;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffafa',
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d5d5d5d5',
  },
  btnSquare: {
    padding: 15,
    borderRightColor: '#e3e3e3ef',
    borderRightWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  txt18: {
    fontSize: 18,
    color: '#4f6d7a',
    fontWeight: 'bold',
  },
  formInput: {
    flex: 1,
    padding: 10,
    color: '#333333',
  },
  formInputDisabled: {
    backgroundColor: '#EBEBE4',
  },
  txtDisabled: {
    color: '#bbb8b8',
  },
});

export const MenuInput = ({
  label,
  value,
  onBtnPress,
  inputType,
  editable,
  ...rest
}: MenuInputProps) => {
  return (
    <View tabIndex={0} style={styles.container}>
      <TouchableOpacity style={styles.btnSquare} onPress={onBtnPress}>
        <Text style={styles.txt18}>{label}</Text>
      </TouchableOpacity>
      <TextInput
        editable={editable}
        keyboardType={inputType}
        style={[
          styles.formInput,
          editable === false && [styles.formInputDisabled, styles.txtDisabled],
        ]}
        value={value}
        {...rest}
      />
    </View>
  );
};
