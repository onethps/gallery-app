import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {spacing} from '../../constants/themes';

export const CardMedia = ({source}) => {
  return (
    <View style={styles.media}>
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
  media: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: spacing.borderRadius,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
