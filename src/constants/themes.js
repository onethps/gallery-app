import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const colors = {
  primary: '#070f18',
  gray: '#8b8989',
  lightGray: '#b2b2b2',
  light: '#fbfbfb',
  white: '#fff',
  black: '#000',
};

export const sizes = {
  width,
  height,
};

export const spacing = {
  s: 5,
  m: 10,
  l: 15,
};

export const typography = {
  h1: {
    fontSize: 20,
  },
  h2: {
    fontSize: 18,
  },
  h3: {
    fontSize: 16,
  },
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
