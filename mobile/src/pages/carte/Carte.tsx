import React, { useState } from 'react';
import {
  StyleSheet, 
  SafeAreaView,
  ScrollView,
  ImageBackground
} from 'react-native';
import Constants from 'expo-constants';

import ItemsList from '../../components/ItemsList'
import Info from '../../components/Info'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#202020'
  },
  image: {
    opacity: 0.33,
    position: 'absolute',
    width: 546,
    height: 821,
    left: -95,
    top: -164,
  }
  
});

const Carte = () => {
  return (
      <ImageBackground 
          source={require('../../assets/home-background.jpg')}
          style={styles.container}
          imageStyle={styles.image}
        >
            <ScrollView>
                  <Info />
                  <ItemsList />
            </ScrollView>
      </ImageBackground>
  )
}
export default Carte;