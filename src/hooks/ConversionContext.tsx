import React, {createContext, useEffect, useState} from 'react';
import {api} from '../utils/api';
import {Alert} from 'react-native';

interface Rates {
  [currency: string]: number;
}

interface ConversionType {
  baseCurrency: string;
  quoteCurrency: string;
  setBaseCurrency: React.Dispatch<React.SetStateAction<string>>;
  setQuoteCurrency: React.Dispatch<React.SetStateAction<string>>;
  swapCurrencies: () => void;
  rates: Rates;
  date: any;
  isLoading: boolean;
}

export const ConversionContext = createContext<ConversionType | any>('');

export const ConversionProvider = ({children}: any) => {
  const [baseCurrency, _setBaseCurrency] = useState('USD');
  const [quoteCurrency, setQuoteCurrency] = useState('IDR');
  const [date, setDate] = useState(new Date());
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const setBaseCurrency = (currency: string) => {
    setIsLoading(true);
    return api(`/latest?base=${currency}`)
      .then((res: any) => {
        _setBaseCurrency(currency);
        setRates(res.rates);
        setDate(new Date(res.date));
      })
      .catch((err: any) => {
        Alert.alert('Error, terjadi kesalahan', err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  useEffect(() => {
    setBaseCurrency(baseCurrency);
  }, []);

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    swapCurrencies,
    date,
    rates,
    isLoading,
  };

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
