import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './Tab';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Constants.statusBarHeight * 1.25,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'left',
    backgroundColor: theme.colors.black,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text='Repositories' route='/' />
      <AppBarTab text='Sign In' route='/signin' />
    </View>
  );
};

export default AppBar;
