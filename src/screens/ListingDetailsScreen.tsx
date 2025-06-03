import { Image, StyleSheet, Text, View } from 'react-native';
import defaultStyles from '@Constants/styles';
import ListItem from '@Components/ListItem';
import colors from '@Constants/colors';
import type { FC } from 'react';

const ListingDetailsScreen: FC = () => (
    <View>
        <Image style={styles.image} source={require("@Images/jacket.png")} />
        <View style={styles.infoContainer}>
            <Text style={styles.title}>Red jacket for sale</Text>
            <Text style={styles.price}>$100</Text>
            <View style={styles.userContainer}>
                <ListItem
                    style={{ width: "100%" }}
                    onPress={() => console.log("first")}
                    image={require("@Images/user.jpg")}
                    title="mohammad mohammadi frontend developer"
                    subTitle='5 Listings'
                />
            </View>
        </View>
    </View>
)


const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    infoContainer: {
        padding: 20
    },
    title: {
        fontFamily: defaultStyles.font.fontFamily,
        fontSize: 26,
        fontWeight: 600,
        marginBottom: 10
    },
    price: {
        color: colors.primary,
        fontFamily: defaultStyles.font.fontFamily,
        fontSize: 20,
        fontWeight: "bold",
    },
    userContainer: {
        marginTop: 40,
        width: "100%",
    }
})

export default ListingDetailsScreen