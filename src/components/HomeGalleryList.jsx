import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {sizes, spacing} from '../constants/themes';

const CARD_WIDTH = sizes.width / 2 - spacing.l * 2;
const CARD_HEIGHT = 220;

export const HomeGalleryList = ({list}) => {
  return (
    <View style={styles.container}>
      {list.map(image => {
        return (
          <TouchableOpacity key={image.id} style={styles.imageContainer}>
            <View style={styles.imageBox}>
              <Image
                style={styles.image}
                source={{
                  uri: image.link,
                }}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer: {
    marginVertical: spacing.l,
    marginHorizontal: spacing.l,
  },
  imageBox: {},
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: spacing.borderRadius,
  },
});
