import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {sizes, spacing} from '../../constants/themes';

const CARD_WIDTH = sizes.width - 80;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

export const Carousel = ({data = [], renderItem}) => {
  return (
    <FlatList
      data={data}
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH_SPACING}
      keyExtractor={i => i.id}
      renderItem={({item}, index) => {
        return renderItem({
          item,
          index,
          style: {
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            marginLeft: spacing.l,
            marginRight: spacing.l,
            marginVertical: spacing.l,
          },
        });
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.m,
  },
});
