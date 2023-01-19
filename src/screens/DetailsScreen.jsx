import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {colors, sizes, spacing} from '../constants/themes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ArrowLeft} from '../constants/icons';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import {DetailsBottomCard} from '../components/DetailsBottomCard';

export const DetailsScreen = ({route}) => {
  const {item} = route.params;
  const insets = useSafeAreaInsets();
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <View style={[styles.backButton, {marginTop: insets.top}]}>
        <ArrowLeft style={styles.backIcon} onPress={() => nav.goBack()} />
      </View>
      <SharedElement
        style={StyleSheet.absoluteFillObject}
        id={`item.${item.id}.photo`}>
        <View style={[StyleSheet.absoluteFillObject, styles.imageBox]}>
          <Image
            source={{
              uri: item.link,
            }}
            style={[StyleSheet.absoluteFillObject, styles.image]}
          />
        </View>
      </SharedElement>
      <DetailsBottomCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
    left: spacing.l,
  },
  backIcon: {
    color: colors.white,
  },
  imageBox: {
    overflow: 'hidden',
    borderRadius: sizes.borderRadius,
  },
  image: {
    width: sizes.width,
    height: sizes.height,
    resizeMode: 'cover',
  },
});
