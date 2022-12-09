import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import Repository from './Repository';
import NewReview from './NewReview';
import AppBar from './AppBar';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});

const Main = () => {
  return (
    <>
      <View style={styles.container}>
        <AppBar />
        <Routes>
          <Route path='/' element={<RepositoryList />} exact />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/:id' element={<Repository />} />
          <Route path='/review' element={<NewReview />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </View>
    </>
  );
};

export default Main;
