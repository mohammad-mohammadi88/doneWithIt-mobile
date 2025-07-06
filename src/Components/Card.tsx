import { ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";
import { useState, type FC } from "react";
import { Href, useRouter } from "expo-router";
import { Image } from "expo-image";

import defaultStyles from "@Constants/styles";
import { capitalize } from "@/utilities";
import colors from "@Constants/colors";
import { SoldOutMark } from ".";

interface Props {
    href: Href;
    imageURL: string;
    isSold: boolean;
    subTitle: string;
    title: string;
}

const Card: FC<Props> = ({ title, subTitle, imageURL, isSold, href }) => {
    const router = useRouter()
    const [imageSource, setImageSource] = useState<ImageSourcePropType>({
        uri: imageURL,
    });
    const cardInner = (
        <>
            <Image
                style={styles.image}
                source={imageSource}
                onError={() =>
                    setImageSource(require("@Images/notfoundImage.png"))
                }
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={2}>{capitalize(title)}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </>
    );
    return (
        <View style={styles.card}>
            <SoldOutMark isSold={isSold} />
            {href && !isSold ? <Pressable onPress={() => router.push(href)}>{cardInner}</Pressable> : cardInner}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 20,
        backgroundColor: "#fff",
        borderRadius: 20,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    infoContainer: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 7,
        fontFamily: defaultStyles.font.fontFamily,
    },
    subTitle: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: 600,
        fontFamily: defaultStyles.font.fontFamily,
    },
});

export default Card;
