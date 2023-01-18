import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ExploreCarousel} from '../components/ExploreCarousel';
import {Header} from '../components/Header';
import {HomeGalleryList} from '../components/HomeGalleryList';
import {SectionHeader} from '../components/SectionHeader';
import {IMAGES_HOME_LIST_RESOURCES, IMAGES_RESOURCES} from '../data/images';

export const HomeScreen = () => {
  return (
    <View>
      <Header />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <ExploreCarousel list={IMAGES_RESOURCES} />
      </ScrollView> */}
      <SectionHeader
        title={'Popular'}
        buttonTitle="See All"
        onPress={() => {}}
      />
      <HomeGalleryList list={IMAGES_HOME_LIST_RESOURCES} />
    </View>
  );
};
