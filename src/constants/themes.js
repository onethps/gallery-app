import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const colors = {
  primary: '#070f18',
  secondary: '#EBEAFD',
  third: '#F1F3F8',
  gray: '#8b8989',
  lightGray: '#b2b2b2',
  light: '#fbfbfb',
  white: '#fff',
  black: '#000',
};

export const gradients = {
  primary: 'linear-gradient(162.84deg, #D5E7F4 0%, #FCDADF 133.39%);',
};

export const sizes = {
  width,
  height,
};

export const spacing = {
  s: 5,
  m: 10,
  l: 15,
  borderRadius: 10,
};

export const typography = {
  h2: 24,
  h3: 18,
  body: 14,
};

export const shadow = {
  light: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dark: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
};
