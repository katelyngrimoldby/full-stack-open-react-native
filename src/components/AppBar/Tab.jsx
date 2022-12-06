import { StyleSheet, Pressable } from 'react-native';
import Text from '../CustomText';

const styles = StyleSheet.create({
  item: {
    marginLeft: 15,
  },
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable key={text} style={styles.item}>
      <Text color='light' fontSize='subheading'>
        {text}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
