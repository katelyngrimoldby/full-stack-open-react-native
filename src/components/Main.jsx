import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {},
});

const Main = () => {
  return (
    <>
      <AppBar routes={['Repositories', 'Settings']} />
      <View style={styles.container}>
        <RepositoryList />
      </View>
    </>
  );
};

export default Main;
