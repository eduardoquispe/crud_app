import { forwardRef } from "react";
import { TextInput as PaperTextInput, Text } from "react-native-paper";
import { TextInput as RNTextInput, View } from "react-native";
import { FieldError, useController, useFormContext, useFormState } from "react-hook-form";

import { TextInputProps as Props } from "./text-input.types";
import styles from "./text-input.styles";

const TextInput = forwardRef<RNTextInput, Props>((props, ref) => {
  const { name, defaultValue, ...rest } = props;

  const formContext = useFormContext()
  const { field } = useController({ name, defaultValue });
  const { errors } = useFormState();

  const error: FieldError = errors[name] as FieldError;
  const { onChange, onBlur, value } = field;

  const handleChangeText = (text: string) => onChange(text);

  if (!formContext) {
    return null;
  }

  return (
    <View style={styles.container}>
      <PaperTextInput
        ref={ref}
        onChangeText={text => handleChangeText(text)}
        error={!!errors?.[name]}
        value={value ? String(value) : ''}
        onBlur={onBlur}
        {...rest}
      />
      {
        error ? <Text style={styles.textError}>{error.message}</Text> : null
      }
    </View>
  );
})

export default TextInput;