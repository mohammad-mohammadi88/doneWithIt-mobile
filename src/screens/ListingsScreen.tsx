import colors from '@/constants/colors';
import type { FC } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Card from '@Components/Card';

interface CardInterface{
    id: number;
    title: string,
    image: any;
    price: number
}
const initialCards:CardInterface[] = [
    {
        id:1,
        title:'Red jacket for sale',
        price: 100,
        image:require('@Images/jacket.png')
    },
    {
        id:2,
        title:'big sofa for sale',
        price: 250,
        image:require('@Images/sofa.png')
    },
]
const ListingsScreen :FC = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={initialCards}
                renderItem={({item:{title,price,image}}) => <Card
                    subTitle={"$" + price}
                    title={title}
                    image={image}
                />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        padding: 20
    }
})

export default ListingsScreen