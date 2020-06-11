import React from 'react';
import { View,
  Text, 
  StyleSheet,
  Image
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CardContent from '../CardContent/CardContent';

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
    width: '100%',
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    height: 140,
  },
  image: {
    width: '80%',
    height: '85%',
    borderRadius: 13,
    backgroundColor: 'black',
    opacity: 0.9
  },
  name: {
      fontFamily: 'Montserrat_800ExtraBold',
      fontSize: 16,
      color: '#ECB243',
      marginBottom: 10
  },
  description: {
      fontFamily: 'Montserrat_800ExtraBold',
      fontSize: 12,
      color: '#292929',
      marginBottom: 10

  },
  price: {
      fontFamily: 'Montserrat_800ExtraBold',
      fontSize: 16,
      color: '#ECB243'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 12
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
interface ListCardProps {

  }
const images = [
  require('../../assets/mexicano.jpg'),
]

const ListCard: React.FC<ListCardProps> = () => {
  const navigation = useNavigation();
  const handleNavigationToDetails = () => {
    navigation.navigate('Details')
  }
  return (
    <RectButton style={styles.card} onPress={handleNavigationToDetails}>
        <CardContent/>
    </RectButton>
  )
}
export default ListCard;
