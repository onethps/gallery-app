import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {sizes, spacing} from '../../constants/themes';

const CARD_WIDTH = sizes.width - 80;
const CARD_HEIGHT = 200;

export const CardMedia = ({source}) => {
  return (
    <View style={styles.imageBox}>
      <Image
        source={{
          uri: source.link,
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageBox: {
    flex: 1,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
