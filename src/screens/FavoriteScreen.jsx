import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const FavoriteScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>FavoriteScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'red',
  },
});
