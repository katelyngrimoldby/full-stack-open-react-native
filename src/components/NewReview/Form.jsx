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

const NewReviewForm = ({ onSubmit, errors }) => {
  const buttonStyle = [
    styles.button,
    (errors.ownerName || errors.repositoryName || errors.rating) && {
      opacity: 0.5,
    },
  ];

  return (
    <View style={styles.container}>
      <FormikTextInput name='ownerName' placeholder='Repository Owner' />
      <FormikTextInput name='repositoryName' placeholder='Repository Name' />
      <FormikTextInput name='rating' placeholder='Rating (0-100)' />
      <FormikTextInput name='text' placeholder='Review' multiline={true} />
      <Pressable
        onPress={onSubmit}
        style={buttonStyle}
        disabled={errors.ownerName || errors.repositoryName || errors.rating}
      >
        <Text color='light' fontWeight='bold'>
          Add Review
        </Text>
      </Pressable>
    </View>
  );
};

export default NewReviewForm;
