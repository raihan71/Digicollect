import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 20,
    borderColor: '#d5d5d5d5',
    borderRadius: 10,
    borderWidth: 1,
  },
  btn: {
    backgroundColor: colors.whiteSnow,
    padding: 10,
    borderRightColor: colors.grey,
    borderRightWidth: 2,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  btnTxt: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'semibold',
  },
  formInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
});

const Form = ({handleTargetCurrency, handleSourceCurrency}: any) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleTargetCurrency} style={styles.btn}>
          <Text style={styles.btnTxt}>IDR</Text>
        </TouchableOpacity>
        <TextInput
          keyboardType="numeric"
          style={styles.formInput}
          placeholder=""
        />
      </View>

      <View style={styles.container}>
        <TouchableOpacity onPress={handleSourceCurrency} style={styles.btn}>
          <Text style={styles.btnTxt}>USD</Text>
        </TouchableOpacity>
        <TextInput
          keyboardType="numeric"
          style={styles.formInput}
          placeholder=""
        />
      </View>

      <View
        style={{
          padding: 20,
        }}>
        <Button
          color={colors.matcha}
          title="Ubah Currency"
          onPress={() => {}}
        />
      </View>
    </>
  );
};

export default Form;
