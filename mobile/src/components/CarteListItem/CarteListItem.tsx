/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    card: {
        marginBottom: 12,
        width: '100%',
        backgroundColor: '#F4F4F4',
        borderRadius: 10,
        height: 140,
    },
    image: {
        width: '80%',
        height: 120,
        borderRadius: 10,
        backgroundColor: 'black',
        opacity: 0.9
    },
    name: {
        fontFamily: 'Montserrat_800ExtraBold',
        fontSize: 16,
        color: '#ECB243',
        marginBottom: 10,
        marginTop: 12
    },
    description: {
        fontFamily: 'Montserrat_800ExtraBold',
        fontSize: 12,
        color: '#292929',
        overflow: 'hidden'
    },
    price: {
        fontFamily: 'Montserrat_800ExtraBold',
        fontSize: 16,
        color: '#ECB243',
        marginTop: 10,
        marginBottom: 12
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 12
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        marginTop: 12,
        marginBottom: 12,
        marginRight: 12
    },
    descriptionContainer: {
        overflow: 'hidden'
    }
});
export interface Content {
    name: string;
    price: string;
    description: string;
    imageUrl: string;
}

interface ListCardProps {
    content: Content;
}


const ListCard: React.FC<ListCardProps> = ({content}: ListCardProps) => {
    const {name, price, description, imageUrl} = content;
    const navigation = useNavigation();
    const handleNavigationToDetails = () => {
        navigation.navigate('Details', {
            details: content
        });
    };
    
    return (
        <RectButton style={styles.card} onPress={handleNavigationToDetails}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image 
                        source={{uri: `http://192.168.100.19:3333/${imageUrl}`}}
                        style={styles.image}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                    <Text style={styles.price}>{price}</Text>
                </View>
            </View>
        </RectButton>
    );
};
export default ListCard;
