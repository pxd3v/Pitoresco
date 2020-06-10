import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Routes from './src/Routes'
import { Montserrat_800ExtraBold, useFonts } from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';

const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,

  })
  if(!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <>
    <StatusBar  backgroundColor="transparent" translucent/>
    <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
