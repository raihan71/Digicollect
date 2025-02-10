import React, {createContext, useState, ReactNode} from 'react';

export const ConversionContext = createContext({
  baseCurrency: 'USD',
  quoteCurrency: 'IDR',
  setBaseCurrency: (currency: string) => {},
  setQuoteCurrency: (currency: string) => {},
  swapCurrencies: () => {},
});

export const ConversionContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [quoteCurrency, setQuoteCurrency] = useState('IDR');

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    swapCurrencies,
  };

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
