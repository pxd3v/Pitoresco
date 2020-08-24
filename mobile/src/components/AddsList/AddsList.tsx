import React, { useState } from 'react';
import { View,
    StyleSheet,
} from 'react-native';
import AddsListItem from '../AddsListItem';
import { AddListItem } from '../../pages/carte/CarteDetailsScreen';

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
    }
});


interface AddsListProps {
    setAddsList: React.Dispatch<React.SetStateAction<AddListItem[]>>,
    addsList: AddListItem[]
}

const AddsList: React.FC<AddsListProps> = ({addsList, setAddsList}) => {
    const data = [
        {
            description: 'Picles',
            price: 5.9,
            formatedPrice: '5,90',
            id: '0'
        },
        {
            description: 'Bacon',
            price: 5.9,
            formatedPrice: '5,90',
            id: '1'
        },
        {
            description: 'Ovo',
            price: 5.9,
            formatedPrice: '5,90',
            id: '2'
        },
        {
            description: 'Carne',
            price: 5.9,
            formatedPrice: '5,90',
            id: '3'
        },
        {
            description: 'Molho especial',
            price: 5.9,
            formatedPrice: '5,90',
            id: '4'
        },
    ];
    const addItemToAddsList = (newAdd: Add) => {
        const exist = addsList.find((add) => add.add.id === newAdd.id);
        if(exist) {
            setAddsList((addsList) => addsList.map((add) => add.add.id === newAdd.id ? {
                add: add.add,
                amount: add.amount + 1
            } : add));
        } else {
            setAddsList((addsList) => [...addsList, {add: newAdd, amount: 1}]);
        }
    };
    const removeItemFromAddsList = (id: string) => {
        const add = addsList[addsList.map((add) => add.add.id).indexOf(id)];
        if(add.amount > 1) {
            setAddsList((addsList) => [...addsList, {add: add.add, amount: add.amount - 1}]);
        } else {
            setAddsList((addsList) => addsList.splice(addsList.map((add) => add.add.id).indexOf(id), 1));
        }
    };
    return (
        <View style={styles.listContainer}>
            {data.map((item, index) => (
                <AddsListItem
                    key={String(item.id)}
                    firstItem={index === 0} 
                    lastItem={index === data.length - 1}
                    itemData={item}
                    addItemToAddsList={addItemToAddsList}
                    removeItemFromAddsList={removeItemFromAddsList}
                />
            ))}
        </View>
    );
};
export default AddsList;
