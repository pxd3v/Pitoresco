import React from 'react';
import { View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: '#F4F4F4',
        borderRadius: 10,
    },
    contentContainer: {
        padding: 12,
        paddingTop: 16
    },
    contentHeader: {
        textAlignVertical: 'top',
        flexDirection: 'row'
    },
    burguerName: {
        color: '#ECB243',
        fontSize: 21,
        fontFamily: 'Montserrat_800ExtraBold',
        flex: 1
    },
    price: {
        color: '#ECB243',
        fontSize: 25,
        fontFamily: 'Montserrat_800ExtraBold',
    },
    description: {
        color: '#292929',
        fontSize: 12,
        fontFamily: 'Montserrat_500Medium',
        marginTop: 12
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: 'black',
        opacity: 0.9,
    },
    imageButton: {

    },
    iconContainer: {
        position: 'absolute',
        flexDirection: 'row'
    },
    iconLeftView: {
        flex: 1
    },
    icon: {
        margin: 12
    }
});
interface itemDetail {
    imageUrl: string;
    description: string;
    price: string;
    name: string;
}

interface CarteListItemProps {
    details: itemDetail;
}

const CarteListItem: React.FC<CarteListItemProps> = ({details}: CarteListItemProps) => {
    const { imageUrl, description, price, name} = details;
    const navigation = useNavigation();
    const handleNavigationToDetails = () => {
        navigation.navigate('ImageDetail', {
            imageUrl
        });
    };

    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.imageButton} onPress={handleNavigationToDetails}>
                <Image source={{uri: `http://192.168.100.19:3333/${imageUrl}`}} style={styles.image} />
                <View style={styles.iconContainer}>
                    <View style={styles.iconLeftView}></View>
                    <MaterialIcons name="search" size={30} color="#FFF" style={styles.icon}/>
                </View>
            </TouchableOpacity>
            <View style={styles.contentContainer}>
                <View style={styles.contentHeader}>
                    <Text style={styles.burguerName}>{name}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};
export default CarteListItem;
