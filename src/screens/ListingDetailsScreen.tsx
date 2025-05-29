import ListItem from '@Components/ListItem';
import colors from '@Constants/colors';
import type { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ListingDetailsScreen: FC = () => {
    return (
        <View>
            <Image style={styles.image} source={require("@Images/sampleCardImage.png")} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Red jacket for sale</Text>
                <Text style={styles.price}>$100</Text>
                <View style={styles.userContainer}>
                    <ListItem
                        style={{width:"100%"}}
                        onPress={() => console.log("first")}
                        image={require("@Images/user.jpg")}
                        title="mohammad mohammadi frontend developer"
                        subTitle='5 Listings'
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    infoContainer: {
        padding: 20
    },
    title: {
        fontSize: 26,
        fontWeight: 600,
        marginBottom: 10
    },
    price: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: "bold",
    },
    userContainer: {
        marginTop: 40,
        width: "100%",
        
    }
})

export default ListingDetailsScreen