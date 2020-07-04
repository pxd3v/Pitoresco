import React from 'react';
import { View,
    StyleSheet,
} from 'react-native';
import AddsListItem from '../AddsListItem';

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
    }
});

const AddsList = () => {
    const data = [
        {
            description: 'Picles',
            price: 5.9,
            formatedPrice: '5,90',
            id: 0
        },
        {
            description: 'Bacon',
            price: 5.9,
            formatedPrice: '5,90',
            id: 1
        },
        {
            description: 'Ovo',
            price: 5.9,
            formatedPrice: '5,90',
            id: 2
        },
        {
            description: 'Carne',
            price: 5.9,
            formatedPrice: '5,90',
            id: 3
        },
        {
            description: 'Molho especial',
            price: 5.9,
            formatedPrice: '5,90',
            id: 4
        },
    ];
    return (
        <View style={styles.listContainer}>
            {data.map((item, index) => (
                <AddsListItem
                    key={String(item.id)}
                    firstItem={index === 0} 
                    lastItem={index === data.length - 1}
                    itemData={item}
                />
            ))}
        </View>
    );
};
export default AddsList;
