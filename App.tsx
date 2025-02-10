import React from 'react';
import StackScreen from './src/components/Navigation/StackNavigation';
import {ConversionProvider} from './src/hooks/ConversionContext';

const App = () => (
  <ConversionProvider>
    <StackScreen />
  </ConversionProvider>
);

export default App;
