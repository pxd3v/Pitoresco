import React from 'react';
import {
  StyleSheet, 
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DetailsCard from '../../components/DetailsCard'
import AddsList from '../../components/AddsList';
import { RectButton } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#E9E9E9',
  },
  image: {
    opacity: 0.33,
    position: 'absolute',
    width: 546,
    height: 821,
    left: -95,
    top: -164,
  },
  screenTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
  title: {
    flex: 1,
    fontFamily: "Raleway_800ExtraBold",
    fontSize: 24
  },
  icon: {
    paddingRight: 8
  },
  body: {
    flex: 1,
    marginLeft: 18,
    marginRight: 18
  },
  detailsCard: {
    marginBottom: 24,
  },
  addsContainer: {
  },
  addsTitle: {
    fontSize: 20,
    fontFamily: "Raleway_800ExtraBold",
    marginBottom: 8
  },
  obsTitle: {
    fontSize: 20,
    fontFamily: "Raleway_800ExtraBold",
    marginBottom: 8,
    flex: 1
  },
  obsTitleContainer: {
    flexDirection: 'row',
  },
  obsInputContainer: {
    backgroundColor: '#F4F4F4',
    height: 120,
    marginBottom: 12,
    borderRadius: 10,
    padding: 12
  },
  input: {
    height: '100%',
    textAlignVertical: "top"
  },
  obsContainer: {
    marginTop: 20,
    marginBottom: 24
  },
  endButton: {
    borderRadius: 10,
    backgroundColor: '#FFC556',
    alignItems: 'center',
    marginBottom: 24
  },
  endButtonText: {
    fontFamily: "Raleway_800ExtraBold",
    color: '#292929',
    fontSize: 20,
    marginTop: 12,
    marginBottom: 12
  }
});

const CarteDetailsScreen = () => {
  const navigate = useNavigation()
  const handleNavigateBack = () => {
    navigate.goBack()
  }
  const handleSubmit = () => {
    handleNavigateBack()
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <View style={styles.container}>
          <View style={styles.screenTitle}>
            <TouchableOpacity onPress={handleNavigateBack}>
              <Feather name="arrow-left-circle" size={40} color="#ECB243" style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.title}>
              DETALHES DO ITEM
            </Text>
          </View>
          <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
            <View style={styles.detailsCard}>
              <DetailsCard />
            </View>
            <View style={styles.addsContainer}>
              <Text style={styles.addsTitle}>
                ADICIONAIS
              </Text>
              <AddsList />
            </View>
            <View style={styles.obsContainer}>
              <View style={styles.obsTitleContainer}>
                <Text style={styles.obsTitle}>
                  OBSERVAÇÕES
                </Text>
                <MaterialCommunityIcons name="android-messages" size={28} color="black" />
              </View>
              <View style={styles.obsInputContainer}>
                <TextInput 
                  editable 
                  multiline 
                  numberOfLines={4} 
                  style={styles.input} 
                  placeholder={"Adicione uma observação como por exemplo: sem alface, etc.."}
                  />
              </View>
            </View>
            <RectButton style={styles.endButton} onPress={handleSubmit}>
              <Text style={styles.endButtonText}>FINALIZAR PEDIDO</Text>
            </RectButton>
          </ScrollView>
      </View>
    </>
  )
}

export default CarteDetailsScreen;