import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { FC } from "react";

import type { IconNamesType } from "@Types/globals";
import defaultStyles from "@/constants/styles";

interface Props {
    backgroundColor: string;
    icon: IconNamesType;
    iconColor?: string;
    size: number;
    style?: ViewStyle;
    onPress?: () => void;
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
        },
    });
    const Container = onPress ? Pressable : View;
    return (
        <Container
            accessibilityLabel='IconContainer'
            onPress={onPress}
            style={[styles.iconContainer, style, defaultStyles.flexCenter]}
        >
            <MaterialCommunityIcons
                name={icon}
                size={size / 2}
                color={iconColor}
            />
        </Container>
    );
};

export default Icon;
