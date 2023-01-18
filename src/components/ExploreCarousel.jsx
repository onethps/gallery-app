import {FlatList, StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {shadow, sizes, spacing} from '../constants/themes';

const CARD_WIDTH = sizes.width - 80;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

export const ExploreCarousel = ({list}) => {
  return (
    <FlatList
      data={list}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH_SPACING}
      keyExtractor={i => i.id}
      renderItem={({item}, index) => {
        return (
          <TouchableOpacity
            style={{
              marginLeft: spacing.l,
              marginRight: spacing.l,
              marginVertical: spacing.l,
            }}>
            <View style={[styles.card, shadow.dark]}>
              <View style={styles.imageBox}>
                <Image
                  source={{
                    uri: item.link,
                  }}
                  style={styles.image}
                />
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'cover',
    borderRadius: 20,
  },
});
