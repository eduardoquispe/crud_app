import {StyleSheet} from 'react-native';
import {$palette} from '../../../styles/variables';

export const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    color: $palette.red1,
    textAlign: 'center',
    marginTop: 20,
  },
});
