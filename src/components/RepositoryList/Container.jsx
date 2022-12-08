import { FlatList, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import RepositoryItem from './Item';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.lightGrey,
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      style={styles.container}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Link to={`/${item.id}`}>
          <RepositoryItem key={item.id} repo={item} />
        </Link>
      )}
    />
  );
};

export default RepositoryListContainer;
