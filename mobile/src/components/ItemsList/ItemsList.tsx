import React from 'react';
import { View,
  Text, 
  StyleSheet, 
} from 'react-native';
import * as Svg from 'react-native-svg';


const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    backgroundColor: '#F4F4F4',
    borderRadius: 30,
    alignSelf: 'center',
    height: 130,
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
    backgroundColor: "#ffffff",
    borderTopEndRadius: 18,
    borderTopStartRadius: 18,
    opacity: 0.8
  },
  listTitle: {
    paddingTop: 8,
    paddingLeft: 20,
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 20
  },
  contentContainer: {
    
  },
  cardapio: {
    flex: 1,
  }
});

const ItemsList = () => {
  const items = [
    {key: 'Devin'},
    {key: 'Dan'},
    {key: 'Dominic'},
    {key: 'Jackson'},
    {key: 'James'},
    {key: 'Joel'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
  ]
  return (
      <View style={styles.carteContainer}>
            <Text style={styles.listTitle}>CARDÁPIO</Text>
            <View style={styles.cardapio}>
              <View style={styles.list}>
                {items.map(item => (
                  <View key={item.key} style={styles.card}>
                    <Text style={styles.content}>
                        {item.key}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
  )
}
export default ItemsList;
