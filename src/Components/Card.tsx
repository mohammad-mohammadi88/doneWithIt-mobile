import { Image, StyleSheet, Text, View } from "react-native";
import defaultStyles from "@Constants/styles";
import { Href, Link } from "expo-router";
import colors from "@Constants/colors";
import { capitalize } from "@/helpers";
import type { FC } from "react";

interface Props {
    title: string;
    subTitle: string;
    image: any;
    href: Href
}

const Card: FC<Props> = ({ title, subTitle, image, href }) => {
    const cardInner = (
        <>
            <Image style={styles.image} source={image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{capitalize(title)}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </>
    );
    return (
        <View style={styles.card}>
            {href ? <Link href={href}>{cardInner}</Link> : cardInner}
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
