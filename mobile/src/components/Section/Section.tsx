/* eslint-disable react/prop-types */
import React from 'react';
import { View,
    Text, 
    StyleSheet,
} from 'react-native';
import CarteListItem from '../CarteListItem';

interface SectionProps {
    title: string;
    items: {
        name: string;
        imageUrl: string;
        priceFormated: string;
        description: string;
        id: number;
    }[]
}

const styles = StyleSheet.create({
    container: {
    },
    title: {
        color: '#ECB243',
        fontSize: 21,
        fontFamily: 'Raleway_800ExtraBold',
        marginBottom: 8
    }
});

const Section: React.FC<SectionProps> =({ title, items }: SectionProps) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {items.map(item => (
                <CarteListItem key={String(item.id)} content={{name: item.name, description: item.description, imageUrl: item.imageUrl, price: item.priceFormated}}/>
            ))}
        </View>
    );
};

export default Section;
