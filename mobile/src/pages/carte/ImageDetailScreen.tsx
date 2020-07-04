import React from 'react';
import {
    StyleSheet, 
    View,
    TouchableOpacity,
    SafeAreaView,
    Image,
    StatusBar
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Constants from 'expo-constants';

interface Params {
    imageUrl: string;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#E9E9E9',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    goBack: {
        marginTop: 20
    },
    image: {
        width: '100%',
        height: '70%',
        borderRadius: 5
    }
});

const ImageDetailScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const handleNavigateBack = () => {
        navigation.goBack();
    };
    const goBack = () => {
        handleNavigateBack();
    };

    const routeParams = route.params as Params;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
            <TouchableOpacity style={styles.goBack} onPress={goBack}>
                <Feather name="arrow-left-circle" size={40} color="#ECB243"/>
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: `http://192.168.100.19:3333/${routeParams.imageUrl}`}}></Image>
            </View>
        </SafeAreaView>
    );
};

export default ImageDetailScreen;