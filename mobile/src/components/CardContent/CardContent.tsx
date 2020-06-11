import React from 'react';
import { View,
  Text, 
  StyleSheet,
  Image
} from 'react-native';
const styles = StyleSheet.create({
  image: {
    width: '80%',
    height: 120,
    borderRadius: 10,
    backgroundColor: 'black',
    opacity: 0.9
  },
  name: {
      fontFamily: 'Montserrat_800ExtraBold',
      fontSize: 16,
      color: '#ECB243',
      marginBottom: 10,
      marginTop: 12
  },
  description: {
      fontFamily: 'Montserrat_800ExtraBold',
      fontSize: 12,
      color: '#292929',
      overflow: 'hidden'
  },
  price: {
      fontFamily: 'Montserrat_800ExtraBold',
      fontSize: 16,
      color: '#ECB243',
      marginTop: 10,
      marginBottom: 12
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 12
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 12,
    marginRight: 12
  },
  descriptionContainer: {
    overflow: 'hidden'
  }
});
interface CardContentProps {
}

const images = [
  require('../../assets/mexicano.jpg'),
]

const CardContent: React.FC<CardContentProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
          <Image 
              source={require('../../assets/mexicano.jpg')}
              style={styles.image}
          />
      </View>
      <View style={styles.textContainer}>
          <Text style={styles.name}>MEXICANO</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Lorem ipsum dolor sit ame, consectetur adipiscing elit.</Text>
          </View>
          <Text style={styles.price}>19,90</Text>
      </View>
    </View>
  )
}
export default CardContent;
