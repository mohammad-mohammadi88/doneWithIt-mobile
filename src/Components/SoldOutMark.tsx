import { StyleSheet, Text, View } from "react-native";
import type { FC } from "react";

import defaultStyles from "@Constants/styles";

interface Props {
    isSold: boolean;
}

const SoldOutMark: FC<Props> = ({ isSold }) => {
    if (!isSold) return null;
    return (
        <View
            style={[
                defaultStyles.flexCenter,
                defaultStyles.fullScreen,
                styles.container,
            ]}
        >
            <View style={[defaultStyles.fullScreen, styles.overlay]} />

            <View style={[defaultStyles.flexCenter, styles.ticketIcon]}>
                <Text style={[defaultStyles.font, styles.soldText]}>
                    SOLD OUT
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 1,
    },
    overlay: {
        backgroundColor: "black",
        opacity: 0.2,
    },
    soldText: { color: "#fff" },
    ticketIcon: {
        position: "absolute",
        backgroundColor: "red",
        height: 75,
        width: 150,
        transform: [{ rotate: "-25deg" }],
        borderRadius: 5,
    },
});

export default SoldOutMark;
