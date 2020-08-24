import React, { useState } from 'react';
import { View,
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Add } from '../../pages/carte/CarteDetailsScreen';

const styles = StyleSheet.create({
    firstCard: {
        marginBottom: 6,
        width: '100%',
        backgroundColor: '#F4F4F4',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        flexDirection: 'row'
    },
    midCard: {
        marginBottom: 6,
        width: '100%',
        backgroundColor: '#F4F4F4',
        flexDirection: 'row'
    },
    lastCard: {
        width: '100%',
        backgroundColor: '#F4F4F4',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        flexDirection: 'row'
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12,
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft: 12
    },
    iconNumber: {
        fontSize: 22,
        fontFamily: 'Montserrat_600SemiBold',
    },
    textContainer: {
        flex: 2,
        justifyContent: 'center',
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
    description: {
        fontFamily: 'Montserrat_600SemiBold',
        color: '#292929',
        fontSize: 16
    },
    price: {
        fontFamily: 'Montserrat_600SemiBold',
        color: '#ECB243',
        fontSize: 16,
        marginTop: 4
    },
    counterButton: {
    }
});

interface AddsListItemProps {
  firstItem: boolean;
  lastItem: boolean;
  itemData: {
    description: string;
    price: number;
    formatedPrice: string;
    id: string
  },
  addItemToAddsList: (newAdd: Add) => void;
  removeItemFromAddsList: (id: string) => void;
}

const AddsListItem: React.FC<AddsListItemProps> = ({ firstItem, lastItem, itemData, addItemToAddsList, removeItemFromAddsList }) => {
    const [ counter, setCounter ] = useState<number>(0);
    const { description, price, formatedPrice, id } = itemData;
    const handlePlus = () => {
        setCounter(counter + 1);
        addItemToAddsList({
            id,
            name: description,
            price: price
        });
    };
    const handleMinus = () => {
        setCounter(counter - 1);
        removeItemFromAddsList(id);
    };
    return (
        <View style={firstItem ? styles.firstCard : lastItem ? styles.lastCard : styles.midCard}>
            <View style={styles.textContainer}>
                <Text style={styles.description}>
                    {description}
                </Text>
                <Text style={styles.price}>
          +{formatedPrice}
                </Text>
            </View>
            <View style={styles.icons}>
                <TouchableOpacity onPress={handleMinus} style={styles.counterButton} disabled={counter === 0}>
                    <Feather name="minus-circle" size={28} color="black" />
                </TouchableOpacity>
                <Text style={styles.iconNumber}>{counter}</Text>
                <TouchableOpacity onPress={handlePlus} style={styles.counterButton} disabled={counter > 49}>
                    <Feather name="plus-circle" size={28} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default AddsListItem;
