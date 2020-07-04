import React from 'react';

import CarteHomeScreen from './CarteHomeScreen';
import CarteDetailsScreen from './CarteDetailsScreen';
import ImageDetailScreen from './ImageDetailScreen';
import { createStackNavigator } from '@react-navigation/stack';
const CarteStack = createStackNavigator();

const Carte = () => {
    return (
        <CarteStack.Navigator
            headerMode="none">
            <CarteStack.Screen name="Home" component={CarteHomeScreen} />
            <CarteStack.Screen name="Details" component={CarteDetailsScreen} />
            <CarteStack.Screen name="ImageDetail" component={ImageDetailScreen} />
        </CarteStack.Navigator>
    );
};

export default Carte;