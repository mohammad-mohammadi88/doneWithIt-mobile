import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { FC } from "react";

import type { IconNamesType } from "@Types/globals";

interface Props {
    backgroundColor: string;
    icon: IconNamesType;
    iconColor?: string;
    size: number;
    style?: ViewStyle;
    onPress?:()=>void
}

const Icon: FC<Props> = ({
    backgroundColor,
    icon,
    iconColor = "white",
    onPress,
    size,
    style = {},
}) => {
    const styles = StyleSheet.create({
        iconContainer: {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center",
        },
    });
    const Container = onPress ? Pressable : View
    return (
        <Container onPress={onPress} style={[styles.iconContainer, style]}>
            <MaterialCommunityIcons
                name={icon}
                size={size / 2}
                color={iconColor}
            />
        </Container>
    );
};

export default Icon;
