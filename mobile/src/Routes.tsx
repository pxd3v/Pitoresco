import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import Carte from './pages/carte'
import Orders from './pages/orders'
import Sale from './pages/sale'
import Profile from './pages/profile'
const Tab = createBottomTabNavigator();
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Routes = () => {
    return (
        <>
        <NavigationContainer>
            <Tab.Navigator
                
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    switch(route.name) {
                        case 'Cardápio':
                            return <FontAwesome5 name="shopping-bag" size={size} color={color} />;
                        case 'Perfil':
                            return <Ionicons name="md-person" size={size} color={color} />
                    }
                },
                })}
                tabBarOptions={{
                style: {
                    backgroundColor: '#F4F4F4'
                },
                activeTintColor: '#ECB243',
                inactiveTintColor: '#292929',
                }}
            >
                <Tab.Screen name="Cardápio" component={Carte}/>
                <Tab.Screen name="Perfil" component={Profile}/>
            </Tab.Navigator>
        </NavigationContainer>
        </>
    )
}

export default Routes;