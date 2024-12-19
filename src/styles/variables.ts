import {Dimensions} from 'react-native';
import {red100} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const $palette = {
  white: '#fff',
  gray1: '#F5F5F5',
  gray2: '#E4E8F4',
  red1: '#BA1A1A',
  black: '#000',
  purple1: '#6750A4',
};

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const $sizes = {
  minWidth: screenWidth,
  maxWidth: screenWidth,
  minHeight: screenHeight,
};

const variables = {$palette, $sizes};

export default variables;
