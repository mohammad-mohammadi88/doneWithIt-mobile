import { StyleSheet, Text, View } from "react-native";
import Constant from "expo-constants";
import type { FC } from "react";

import defaultStyles from "@Constants/styles";
import colors from "@Constants/colors";
import { useIsOffline } from "@/hooks";


const OfflineNotice: FC = () => {
    const isOffline = useIsOffline();

    if (isOffline)
        return (
            <View style={[styles.container, defaultStyles.flexCenter]}>
                <Text style={[styles.notice, defaultStyles.font]}>
                    No Internet Connection
                </Text>
            </View>
        );
    return null;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        position: "absolute",
        top: Constant.statusBarHeight,
        zIndex: 8,
        height: 50,
        width: "100%",
    },
    notice: {
        color: "white",
    },
});

export default OfflineNotice;
