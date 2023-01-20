import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ExploreCarousel} from '../components/ExploreCarousel';
import {Header} from '../components/Header';
import {HomeGalleryList} from '../components/HomeGalleryList';
import {SectionHeader} from '../components/SectionHeader';
import {gradients} from '../constants/themes';
import {IMAGES_HOME_LIST_RESOURCES, IMAGES_RESOURCES} from '../data/images';

export const HomeScreen = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ExploreCarousel list={IMAGES_RESOURCES} />
        <SectionHeader title={'Popular'} buttonTitle="See All" />
        <HomeGalleryList list={IMAGES_HOME_LIST_RESOURCES} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: gradients.primary,
  },
});
