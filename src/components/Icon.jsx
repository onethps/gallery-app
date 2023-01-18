import React from 'react';
import {Image} from 'react-native';
import icons from '../constants/icons';

export const Icon = ({name, style, width, height, size = 32}) => {
  return (
    <Image
      source={icons[name]}
      style={[{width: size, height: size, resizeMode: 'cover'}, style]}
    />
  );
};
