import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './index';
import Text from '../CustomText';
import theme from '../../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  textInput: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: theme.colors.darkGrey,
    borderStyle: 'solid',
    borderRadius: 5,
    color: theme.colors.black,
    marginBottom: 12,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={styles.textInput}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
