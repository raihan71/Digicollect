import React from 'react';
import StackScreen from './src/components/Navigation/StackNavigation';
import {ConversionProvider} from './src/hooks/ConversionContext';
import {api} from './src/utils/api';

api('/latest?base=USD')
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });

const App = () => (
  <ConversionProvider>
    <StackScreen />
  </ConversionProvider>
);

export default App;
