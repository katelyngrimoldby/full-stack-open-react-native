import { Formik } from 'formik';
import * as yup from 'yup';
import SignInForm from './Form';
import useSignIn from '../../hooks/useSignIn';

const SignIn = () => {
  const [signIn] = useSignIn();
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
      onSubmit={async (values) => {
        const { username, password } = values;

        try {
          const { data } = await signIn(username, password);
          console.log(data.authenticate);
        } catch (e) {
          console.log(e);
        }
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors }) => {
        return <SignInForm onSubmit={handleSubmit} errors={errors} />;
      }}
    </Formik>
  );
};

export default SignIn;
