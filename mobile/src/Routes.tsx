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

const Routes = () => {
    return (
        <>
        <NavigationContainer>
            <Tab.Navigator
                
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    switch(route.name) {
                        case 'Carte':
                            return <Icon name={"menu"} size={size} color={color} />;
                        case 'Orders':
                            return <Icon name={"menu"} size={size} color={color} />;
                        case 'Sale':
                            return <Icon name={"menu"} size={size} color={color} />;
                        case 'Profile':
                            return <Icon name={"menu"} size={size} color={color} />;
                    }
                },
                })}
                tabBarOptions={{
                style: {
                    backgroundColor: '#292929'
                },
                activeTintColor: '#FFC737',
                inactiveTintColor: '#E5E5E5',
                }}
            >
                <Tab.Screen name="Carte" component={Carte}/>
                <Tab.Screen name="Orders" component={Orders}/>
                <Tab.Screen name="Sale" component={Sale}/>
                <Tab.Screen name="Profile" component={Profile}/>
            </Tab.Navigator>
        </NavigationContainer>
        </>
    )
}

export default Routes;