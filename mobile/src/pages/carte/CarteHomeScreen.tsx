import React from 'react';
import {
    StyleSheet, 
    ScrollView,
    ImageBackground,
    StatusBar
} from 'react-native';
import Constants from 'expo-constants';

import CarteList from '../../components/CarteList';
import Info from '../../components/Info';

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

const CarteHomeScreen = () => {
    return (
        <>
            <StatusBar backgroundColor="transparent" translucent/>
            <ImageBackground 
                source={require('../../assets/home-background.jpg')}
                style={styles.container}
                imageStyle={styles.image}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Info />
                    <CarteList />
                </ScrollView>
            </ImageBackground>
        </>
    );
};

export default CarteHomeScreen;