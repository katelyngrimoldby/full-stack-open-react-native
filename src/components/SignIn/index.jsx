import { useNavigate } from 'react-router-native';
import useSignIn from '../../hooks/useSignIn';
import SignInContainer from './Container';

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const submit = async (values) => {
    const { username, password } = values;

    try {
      await signIn(username, password);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={submit} />;
};

export default SignIn;
