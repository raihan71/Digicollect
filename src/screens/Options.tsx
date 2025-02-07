import React from 'react';
import {SafeAreaView, Linking, Alert, StatusBar} from 'react-native';
import Icon from '@react-native-vector-icons/feather';
import OptionsItem from '../components/OptionItem';
import {colors} from '../constants/colors';

const Options = () => {
  const handleLink = (url: string) => {
    Linking.openURL(url).catch(() => Alert.alert('Oops! link kamu bermasalah'));
  };

  const [theme, setTheme] = React.useState('blue');

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
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

export default Options;
