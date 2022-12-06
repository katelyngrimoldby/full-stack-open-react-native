import { Formik } from 'formik';
import * as yup from 'yup';
import SignInForm from './SignInForm';

const SignIn = () => {
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
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors }) => {
        console.log(errors.username);
        return <SignInForm onSubmit={handleSubmit} errors={errors} />;
      }}
    </Formik>
  );
};

export default SignIn;
