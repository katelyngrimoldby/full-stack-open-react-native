import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from '../CustomText';

const styles = StyleSheet.create({
  item: {
    marginLeft: 15,
  },
});

const AppBarTab = ({ text, route }) => {
  return (
    <Link to={route} style={styles.item}>
      <Text color='light' fontSize='subheading'>
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;
