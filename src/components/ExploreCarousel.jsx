import {FlatList, StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import {Carousel} from './shared/Carousel';
import {Card} from './shared/Card';
import {CardMedia} from './shared/CardMedia';

export const ExploreCarousel = ({list}) => {
  const navigation = useNavigation();
  return (
    <Carousel
      data={list}
      renderItem={({item, style}) => {
        return (
          <Card
            onPress={() => navigation.navigate('DetailsScreen', {item})}
            style={style}
            shadowStyle="dark">
            <SharedElement
              style={StyleSheet.absoluteFillObject}
              id={`item.${item.id}.photo`}>
              <CardMedia source={item} />
            </SharedElement>
          </Card>
        );
      }}
    />
  );
};
