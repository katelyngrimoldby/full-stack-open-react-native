import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useQuery, useApolloClient } from '@apollo/client';
import useAuthStorage from '../../hooks/useAuthStorage';
import { ME } from '../../graphql/queries';
import Constants from 'expo-constants';
import theme from '../../theme';
import Text from '../CustomText';
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
  const client = useApolloClient();
  const authStorage = useAuthStorage();
  const { data } = useQuery(ME);

  const handlePress = async () => {
    await authStorage.removeAccessToken();
    client.resetStore();
  };
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.scroll}
        contentContainerStyle={{ flexDirection: 'row', justifyContent: 'left' }}
      >
        <AppBarTab text='Repositories' route='/' />
        {data && data.me ? (
          <Pressable
            style={{
              marginLeft: 16,
            }}
            onPress={handlePress}
          >
            <Text color='light' fontSize='subheading'>
              Sign Out
            </Text>
          </Pressable>
        ) : (
          <AppBarTab text='Sign In' route='/signin' />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
