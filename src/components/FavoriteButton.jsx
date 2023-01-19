import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import {FavoriteIcon} from '../constants/icons';
import {colors, shadow, spacing} from '../constants/themes';

export const FavoriteButton = ({style, active}) => {
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.buttonContainer, shadow.dark, style]}>
        <FavoriteIcon fill={active ? 'red' : 'white'} style={styles.icon} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.white,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.s,
  },
  icon: {
    color: colors.primary,
    width: 22,
    height: 22,
  },
  fillIcon: {
    fill: 'red',
  },
});
