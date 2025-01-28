import React from 'react';
import {SafeAreaView, Linking, Alert} from 'react-native';
import {colors} from './src/constants/colors';
import Icon from '@react-native-vector-icons/feather';
import OptionsItem from './src/components/OptionItem';

const App = () => {
  const handleLink = (url: string) => {
    Linking.openURL(url).catch(() => Alert.alert('Oops! link kamu bermasalah'));
  };

  const [theme, setTheme] = React.useState('blue');

  return (
    <SafeAreaView>
      <OptionsItem
        text={`Change Theme : ${theme}`}
        icon={<Icon name="activity" size={20} color={theme} />}
        onTap={() => setTheme(theme === 'grey' ? 'blue' : 'grey')}
      />

      <OptionsItem
        text="About"
        icon={<Icon name="chevron-right" size={20} color={theme} />}
      />

      <OptionsItem
        text="Follow Us"
        icon={<Icon name="twitter" size={20} color={theme} />}
      />
    </SafeAreaView>
  );
};

export default App;
