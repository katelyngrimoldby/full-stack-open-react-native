import { View, StyleSheet, Image } from 'react-native';
import Text from './CustomText.jsx';
import theme from '../theme.js';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 15,
  },
  topRow: {
    flexDirection: 'row',
    marginBottom: 5,
    flexShrink: 1,
    flexGrow: 1,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  language: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.blue,
    padding: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  statWrapper: {
    alignItems: 'center',
  },
});

const roundNumber = (number) => {
  if (number >= 1000) {
    return `${Math.round((number / 1000) * 10) / 10}k`;
  }
  return number;
};

const RepositoryItem = ({ repo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
        <View style={{ flexShrink: 1, marginBottom: 10 }}>
          <Text
            style={{ marginBottom: 5 }}
            fontSize='subheader'
            fontWeight='bold'
          >
            {repo.fullName}
          </Text>
          <Text style={{ marginBottom: 7 }} color='textSecondary'>
            {repo.description}
          </Text>
          <Text color='light' style={styles.language}>
            {repo.language}
          </Text>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.statWrapper}>
          <Text fontWeight='bold'>{roundNumber(repo.stargazersCount)}</Text>
          <Text color='textSecondary'>Stars</Text>
        </View>
        <View style={styles.statWrapper}>
          <Text fontWeight='bold'>{roundNumber(repo.forksCount)}</Text>
          <Text color='textSecondary'>Forks</Text>
        </View>
        <View style={styles.statWrapper}>
          <Text fontWeight='bold'>{roundNumber(repo.reviewCount)}</Text>
          <Text color='textSecondary'>Reviews</Text>
        </View>
        <View style={styles.statWrapper}>
          <Text fontWeight='bold'>{repo.ratingAverage}</Text>
          <Text color='textSecondary'>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
