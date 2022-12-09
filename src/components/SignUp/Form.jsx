import { View, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from '../TextInput/Formik';
import Text from '../CustomText';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexShrink: 1,
  },
  button: {
    backgroundColor: theme.colors.blue,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
});

const SignUpForm = ({ onSubmit, errors }) => {
  const buttonStyle = [
    styles.button,
    (errors.username || errors.password || errors.passwordConfirm) && {
      opacity: 0.5,
    },
  ];

  return (
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput
        name='password'
        placeholder='Password'
        secureTextEntry={true}
      />
      <FormikTextInput
        name='passwordConfirm'
        placeholder='Confirm Password'
        secureTextEntry={true}
      />
      <Pressable
        onPress={onSubmit}
        style={buttonStyle}
        disabled={errors.username || errors.password || errors.passwordConfirm}
      >
        <Text color='light' fontWeight='bold'>
          Sign Up
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
