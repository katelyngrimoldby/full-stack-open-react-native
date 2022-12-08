import { View, Pressable, StyleSheet, FlatList } from 'react-native';
import * as Linking from 'expo-linking';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryList/Item';
import Review from './Review';
import Text from './CustomText';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.blue,
    borderRadius: 5,
    marginHorizontal: 16,
    paddingVertical: 12,
  },
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.lightGrey,
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const Repository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  const reviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  const handlePress = () => {
    Linking.openURL(repository.url);
  };

  if (repository) {
    return (
      <FlatList
        style={styles.container}
        data={reviews}
        renderItem={({ item }) => <Review review={item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={() => (
          <View style={{ backgroundColor: theme.colors.white }}>
            <RepositoryItem repo={repository} />
            <Pressable onPress={handlePress} style={styles.button}>
              <Text
                color='light'
                fontWeight='bold'
                style={{ textAlign: 'center' }}
              >
                Open in GitHub
              </Text>
            </Pressable>
          </View>
        )}
      />
    );
  }
};

export default Repository;
