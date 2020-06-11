import React from 'react';
import { View,
  Text, 
  StyleSheet,
  TextInput
} from 'react-native';
import CarteListItem from '../CarteListItem'
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  content: {
    fontSize: 18,
    alignSelf: 'center',
  },
  list: {
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      paddingTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
  },
  carteContainer: {
    flex: 1,
    backgroundColor: '#E9E9E9',
    borderTopEndRadius: 18,
    borderTopStartRadius: 18,
  },
  listTitle: {
    paddingTop: 8,
    paddingLeft: 20,
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 24
  },
  contentContainer: {
    
  },
  cardapio: {
    flex: 1,
  },
  search: {
    flex: 1,
  },
  searchIcon: {
    marginLeft: 8,
    marginRight: 8
  },
  searchInputContainer: {
    borderRadius: 30,
    backgroundColor: '#F4F4F4',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

const CarteList = () => {
  const items = [
    {
      name: "MEXICANO",
      description: "Lorem impsum dolor sit amet, consectetur adipiscing elit dsajodisajdoiasjdoiasj doisaj doisaj doisaj oidjsaoi.",
      price: 19.9,
      priceFormated: "19,90",
      imageUrl: "mexicano",
      id: 0
  },
  {
      name: "MEXICANO",
      description: "Lorem impsum dolor sit amet, consectetur adipiscing elit.",
      price: 19.9,
      priceFormated: "19,90",
      imageUrl: "mexicano",
      id: 1
  },
  {
    name: "MEXICANO",
    description: "Lorem impsum dolor sit amet, consectetur adipiscing elit.",
    price: 19.9,
    priceFormated: "19,90",
    imageUrl: "mexicano",
    id: 2
  },
  {
    name: "MEXICANO",
    description: "Lorem impsum dolor sit amet, consectetur adipiscing elit.",
    price: 19.9,
    priceFormated: "19,90",
    imageUrl: "mexicano",
    id: 3
  },
  {
    name: "MEXICANO",
    description: "Lorem impsum dolor sit amet, consectetur adipiscing elit.",
    price: 19.90,
    priceFormated: "19,90",
    imageUrl: "mexicano",
    id: 4
  },
]

  return (
      <View style={styles.carteContainer}>
        <Text style={styles.listTitle}>CARDÁPIO</Text>
        <View style={styles.cardapio}>
          <View style={styles.list}>
            <View style={styles.searchInputContainer}>
              <FontAwesome name="search" color="black" style={styles.searchIcon}/>
              <TextInput style={styles.search} />
            </View>
            {items.map(item => (
                <CarteListItem key={String(item.id)}/>
            ))}
          </View>
        </View>
      </View>
  )
}
export default CarteList;
