import { StyleSheet, Text } from "react-native";
import type { FC } from "react";

import defaultStyles from "@Constants/styles";

interface Props {
    error: string;
    size?: number;
}

const AppErrorMessage: FC<Props> = ({ error, size: fontSize = 16 }) =>
    error && <Text style={[styles.errorMessage, { fontSize }]}>{error}</Text>;

const styles = StyleSheet.create({
    errorMessage: {
        color: "red",
        fontFamily: defaultStyles.font.fontFamily,
        paddingHorizontal: 10,
    },
});

export default AppErrorMessage;
