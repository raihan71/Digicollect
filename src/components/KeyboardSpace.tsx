import React, {useEffect} from 'react';
import {View, Keyboard, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});

interface KeyboardSpacerProps {
  onToggle?: (keyboardState: boolean) => void;
}

export const KeyboardSpacer = ({onToggle}: KeyboardSpacerProps) => {
  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => {
      onToggle && onToggle(true);
    });

    const hideListener = Keyboard.addListener('keyboardDidHide', () => {
      onToggle && onToggle(false);
    });

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, [onToggle]);

  return <View style={[styles.container]} />;
};
