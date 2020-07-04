import React from 'react';
import { StyleSheet } from 'react-native';
import Routes from './src/Routes';
import { Montserrat_800ExtraBold, Montserrat_600SemiBold, Montserrat_500Medium, useFonts } from '@expo-google-fonts/montserrat';
import { Raleway_800ExtraBold, Raleway_600SemiBold } from '@expo-google-fonts/raleway';
import { AppLoading } from 'expo';

const App = () => {
    const [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold,
        Raleway_800ExtraBold,
        Montserrat_600SemiBold,
        Raleway_600SemiBold,
        Montserrat_500Medium
    });

    return (
        <>
            {fontsLoaded ?
                <Routes />
                : <AppLoading />
            }
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
