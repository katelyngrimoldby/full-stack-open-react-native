import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import createApolloClient from './utils/apolloClient';
import AuthStorage from './utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';

import Main from './src/components/Main';

const authStorage = new AuthStorage();
const client = createApolloClient(authStorage)

const App = () => {
  return(
    <NativeRouter>
      <ApolloProvider client={client}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;
