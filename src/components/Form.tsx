import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import {colors} from '../constants/colors';
import {currencyFormat} from '../utils/currencyFormat';

dayjs.locale('id');

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
  formInputDisabled: {
    backgroundColor: '#EBEBE4',
  },
  infoCurrency: {
    textAlign: 'center',
    color: '#4f6d7a',
    paddingVertical: 10,
  },
  txtDisabled: {
    color: '#bbb8b8',
  },
});

const Form = ({
  onBtnBaseCurrency,
  onBtnTargetCurrency,
  editable,
  submitTxt,
  baseCurrency,
  targetCurrency,
  swapCurrencies,
  rates,
  baseValue,
  setBaseValue,
}: any) => {
  const dateNow = new Date();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={onBtnBaseCurrency} style={styles.btn}>
          <Text style={styles.btnTxt}>{baseCurrency}</Text>
        </TouchableOpacity>
        <TextInput
          keyboardType="numeric"
          style={styles.formInput}
          onChangeText={setBaseValue}
          placeholder=""
          value={baseValue}
        />
      </View>

      <View style={styles.container}>
        <TouchableOpacity onPress={onBtnTargetCurrency} style={styles.btn}>
          <Text style={styles.btnTxt}>{targetCurrency}</Text>
        </TouchableOpacity>
        <TextInput
          editable={editable}
          keyboardType="numeric"
          style={[
            styles.formInput,
            editable === false && [
              styles.formInputDisabled,
              styles.txtDisabled,
            ],
          ]}
          value={
            baseValue &&
            `${currencyFormat((parseFloat(baseValue) * rates).toFixed(2))}`
          }
        />
      </View>

      <Text style={styles.infoCurrency}>
        1 {baseCurrency} = {rates} {targetCurrency} per{' '}
        {dayjs(dateNow).format('DD MMMM YYYY')}
      </Text>
      <View
        style={{
          padding: 20,
        }}>
        <Button
          color={colors.matcha}
          title={submitTxt}
          onPress={swapCurrencies}
        />
      </View>
    </>
  );
};

export default Form;
