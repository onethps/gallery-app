import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, shadow, sizes, spacing} from '../../constants/themes';

export const Card = ({children, style, onPress, shadowStyle = 'light'}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, shadow[shadowStyle], style]}>
      <View style={styles.inner}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    backgroundColor: colors.white,
    borderRadius: spacing.borderRadius,
  },
  inner: {
    width: '100%',
    height: '100%',
  },
});
