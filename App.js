import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './utils/apolloClient';
import Main from './src/components/Main';

const client = createApolloClient()

const App = () => {
  return(
    <NativeRouter>
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
