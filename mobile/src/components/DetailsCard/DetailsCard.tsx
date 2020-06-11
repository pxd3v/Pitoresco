import React from 'react';
import { View,
  StyleSheet,
} from 'react-native';
import CardContent from '../CardContent/CardContent';

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: '#F4F4F4',
        borderRadius: 10,
    },
});
interface CarteListItemProps {

}

const CarteListItem: React.FC<CarteListItemProps> = () => {
  return (
    <View style={styles.card}>
        <CardContent />
    </View>
  )
}
export default CarteListItem;
