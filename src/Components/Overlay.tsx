import { ColorValue, StyleSheet, View } from "react-native";
import type { FC, ReactNode } from "react";

import defaultStyles from "@Constants/styles";

interface Props {
    visible: boolean;
    color?: ColorValue;
    children?: ReactNode;
}

const Overlay: FC<Props> = ({
    children,
    color: backgroundColor = "white",
    visible,
}) =>
    visible && (
        <View
            style={[
                styles.container,
                defaultStyles.fullScreen,
                defaultStyles.flexCenter,
                { backgroundColor },
            ]}
        >
            {children}
        </View>
    );

const styles = StyleSheet.create({
    container: {
        opacity: 0.8,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: "absolute",
        zIndex: 1,
    },
});

export default Overlay;
