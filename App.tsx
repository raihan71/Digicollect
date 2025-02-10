import React from 'react';
import StackScreen from './src/components/Navigation/StackNavigation';
import {ConversionContextProvider} from './src/hooks/ConversionContext';

const App = () => (
  <ConversionContextProvider>
    <StackScreen />
  </ConversionContextProvider>
);

export default App;
