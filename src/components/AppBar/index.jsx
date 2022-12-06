import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './Tab';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: Constants.statusBarHeight * 2,
    backgroundColor: theme.colors.black,
  },
  scroll: {
    paddingBottom: 16,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.scroll}
        contentContainerStyle={{ flexDirection: 'row', justifyContent: 'left' }}
      >
        <AppBarTab text='Repositories' route='/' />
        <AppBarTab text='Sign In' route='/signin' />
      </ScrollView>
    </View>
  );
};

export default AppBar;
