import { Formik } from 'formik';
import * as yup from 'yup';
import SignInForm from './Form';

const SignInContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is Required'),
    password: yup.string().required('Password is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        onSubmit(values);
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors }) => {
        return <SignInForm onSubmit={handleSubmit} errors={errors} />;
      }}
    </Formik>
  );
};

export default SignInContainer;
