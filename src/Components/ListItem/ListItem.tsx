import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { memo, type FC } from "react";

import type { ListItemProps } from "@Types/globals";
import { AppPressable } from "../AppComponents";
import defaultStyles from "@Constants/styles";
import colors from "@Constants/colors";

const ListItem: FC<ListItemProps> = ({
    ImageReplaceComponent,
    style = {},
    subTitle,
    title,
    image,
    ...props
}) => (
    <AppPressable style={[styles.item, style]} {...props}>
        {ImageReplaceComponent && <ImageReplaceComponent />}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.infoContainer}>
            <Text numberOfLines={1} style={[defaultStyles.font, styles.title]}>
                {title}
            </Text>
            {subTitle && (
                <Text numberOfLines={1} style={styles.subTitle}>
                    {subTitle}
                </Text>
            )}
        </View>
        {props.onPress && (
            <MaterialIcons
                name='chevron-right'
                size={25}
                color={colors.medium}
            />
        )}
    </AppPressable>
);

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    infoContainer: {
        marginLeft: 10,
        height: 70,
        flex: 1,
        justifyContent: "center",
        textOverflow: "hidden",
    },
    dragBox: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
    },
    title: {
        fontWeight: 600,
        textTransform: "capitalize",
    },
    subTitle: {
        fontSize: 17,
        color: colors.medium,
        marginTop: 5,
        fontFamily: defaultStyles.font.fontFamily,
    },
});

export default memo(ListItem);
