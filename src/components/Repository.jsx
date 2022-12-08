import { View, Pressable, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryList/Item';
import Text from './CustomText';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.blue,
    borderRadius: 5,
    marginHorizontal: 16,
    paddingVertical: 12,
  },
});

const Repository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  const handlePress = () => {
    Linking.openURL(repository.url);
  };

  if (repository) {
    return (
      <View>
        <RepositoryItem repo={repository} />
        <Pressable onPress={handlePress} style={styles.button}>
          <Text color='light' fontWeight='bold' style={{ textAlign: 'center' }}>
            Open in GitHub
          </Text>
        </Pressable>
      </View>
    );
  }
};

export default Repository;
