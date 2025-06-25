import type { ImageType, ListingParamsType } from "@Types/listings";
import defaultStyles from "@Constants/styles";
import ListItem from "@Components/ListItem";
import { useState, type FC } from "react";
import colors from "@Constants/colors";
import { capitalize } from "@/utilities";
import {
    ImageSourcePropType,
    StyleSheet,
    Image,
    Text,
    View,
} from "react-native";

interface Props {
    listing: ListingParamsType;
}
const ListingDetailsScreen: FC<Props> = ({
    listing: { images, price, title },
}) => {
    const imageArr: ImageType[] = JSON.parse(images) ?? [];
    const [imageSource, setImageSource] = useState<ImageSourcePropType>({
        uri: imageArr[0]?.url,
    });

    return (
        <View>
            <Image
                style={styles.image}
                source={imageSource}
                onError={() =>
                    setImageSource(require("@Images/notfoundImage.png"))
                }
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={3}>{capitalize(title)}</Text>
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
};

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
