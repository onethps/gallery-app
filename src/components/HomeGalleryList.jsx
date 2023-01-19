import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {sizes, spacing} from '../constants/themes';
import {FavoriteButton} from './FavoriteButton';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation} from '@react-navigation/native';
import {Card} from './shared/Card';
import {CardMedia} from './shared/CardMedia';

const CARD_WIDTH = sizes.width / 2 - spacing.l * 2;
const CARD_HEIGHT = 220;

export const HomeGalleryList = ({list}) => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      {list.map(image => {
        return (
          <Card
            onPress={() => nav.navigate('DetailsScreen', {item: image})}
            key={image.id}
            style={styles.content}>
            <SharedElement style={styles.media} id={`item.${image.id}.photo`}>
              <CardMedia source={image} />
            </SharedElement>

            <FavoriteButton style={styles.button} />
          </Card>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: spacing.l,
    marginHorizontal: spacing.l,
    gap: spacing.l,
    justifyContent: 'center',
  },
  media: {
    flex: 1,
  },
  content: {
    width: CARD_WIDTH,
    overflow: 'hidden',
    borderRadius: spacing.borderRadius,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 10,
  },
});
