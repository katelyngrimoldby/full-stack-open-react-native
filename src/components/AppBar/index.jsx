import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './Tab';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
    paddingTop: Constants.statusBarHeight * 2,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'left',
    backgroundColor: theme.colors.black,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text='Repositories' />
    </View>
  );
};

export default AppBar;
