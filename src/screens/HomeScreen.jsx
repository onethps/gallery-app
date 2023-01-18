import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../components/Header';

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};
