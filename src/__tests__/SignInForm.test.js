import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../components/SignIn/Container'

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const handleSubmit = jest.fn();
      const {getByPlaceholderText, getByText} = render(<SignInContainer onSubmit={handleSubmit} />)

      fireEvent.changeText(getByPlaceholderText('Username'), 'kalle');
      fireEvent.changeText(getByPlaceholderText('Password'), 'password');
      fireEvent.press(getByText('Sign In'));
      await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalledTimes(1);
        expect(handleSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        });
      });
      expect(1).toEqual(1)
    });
  });
});