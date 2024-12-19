import {TextInput} from 'react-native-paper';

/**
 * TextInput props interface.
 * @interface TextInputProps
 * @since 1.0.0
 */
export interface TextInputProps extends React.ComponentProps<typeof TextInput> {
  /** Name of the input. */
  name: string;

  /** Default value of the input. */
  defaultValue?: string;
}
