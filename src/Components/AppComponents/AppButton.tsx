import { ColorValue, StyleSheet, Text, ViewStyle } from "react-native";
import type { FC } from "react";

import colors, { grayPressAction } from "@Constants/colors";
import defaultStyles from "@Constants/styles";
import AppPressable from "./AppPressable";

interface Props {
    BtnStyle?: ViewStyle;
    title: string;
    backgroundColor?: ColorValue;
    onPress: (e: any) => void;
}

const AppButton: FC<Props> = ({
    BtnStyle = {},
    onPress,
    title,
    backgroundColor = colors.secondary,
}) => (
    <AppPressable
        style={[
            styles.btn,
            defaultStyles.flexCenter,
            BtnStyle,
            { backgroundColor },
        ]}
        onPress={onPress}
        pressAction={grayPressAction}
    >
        <Text style={[styles.btnText, defaultStyles.font]}>{title}</Text>
    </AppPressable>
);

const styles = StyleSheet.create({
    btn: {
        width: "100%",
        height: 50,
        borderRadius: 20,
        marginVertical: 10,
    },
    btnText: {
        color: "white",
        fontWeight: 600,
        textAlign: "center",
        textTransform: "uppercase",
    },
});

export default AppButton;
