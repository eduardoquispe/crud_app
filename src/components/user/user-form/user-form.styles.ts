import {StyleSheet} from 'react-native';
import {$palette} from '../../../styles/variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerForm: {
    backgroundColor: $palette.gray2,
    borderRadius: 24,
    padding: 20,
  },
  buttonDelete: {
    marginBottom: 16,
  },
});

export default styles;
