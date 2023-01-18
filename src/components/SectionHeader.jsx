import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {spacing, typography} from '../constants/themes';

export const SectionHeader = ({title, onPress, buttonTitle = 'Button'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button title={buttonTitle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: spacing.l,
    marginHorizontal: spacing.l,
  },
  title: {
    fontSize: typography.h3,
    fontWeight: '600',
  },
});
