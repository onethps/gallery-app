import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MenuIcon, SettingsIcon} from '../constants/icons';
import {spacing} from '../constants/themes';

export const Header = () => {
  const safeArea = useSafeAreaInsets();
  return (
    <View style={[styles.container, {marginTop: safeArea.top}]}>
      <MenuIcon />
      <Text styles>Gallery App</Text>
      <SettingsIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.l,
  },
});
