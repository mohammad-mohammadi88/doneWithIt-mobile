import { Image, StyleSheet, Text, View } from "react-native";
import { CardInterface } from "./ListingsScreen";
import defaultStyles from "@Constants/styles";
import ListItem from "@Components/ListItem";
import colors from "@Constants/colors";
import { capitalize } from "@/helpers";
import type { FC } from "react";

interface Props {
    listing: CardInterface;
}
const ListingDetailsScreen: FC<Props> = ({
    listing: { id, image, price, title },
}) => (
    <View>
        <Image style={styles.image} source={image} />
        <View style={styles.infoContainer}>
            <Text style={styles.title}>{capitalize(title)}</Text>
            <Text style={styles.price}>${price}</Text>
            <View style={styles.userContainer}>
                <ListItem
                    style={{ width: "100%" }}
                    onPress={() => console.log("first")}
                    image={require("@Images/user.jpg")}
                    title='mohammad mohammadi frontend developer'
                    subTitle='5 Listings'
                />
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 250,
    },
    infoContainer: {
        padding: 20,
    },
    title: {
        fontFamily: defaultStyles.font.fontFamily,
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 10,
    },
    price: {
        color: colors.primary,
        fontFamily: defaultStyles.font.fontFamily,
        fontSize: 18,
        fontWeight: "bold",
    },
    userContainer: {
        marginTop: 40,
        width: "100%",
    },
});

export default ListingDetailsScreen;
