import { Dimensions, View } from "react-native";
import type { FC, ReactNode } from "react";
import Constants from "expo-constants";

interface Props {
    children: ReactNode;
    isOffline: boolean;
}

const InitialLayout: FC<Props> = ({ children, isOffline }) => {
    // Status Bar Height
    const SBHeight = Constants.statusBarHeight;
    const offlineNoticeHeight = 50;

    let height = Dimensions.get("screen").height - SBHeight;
    if (isOffline) height -= offlineNoticeHeight;

    let top = SBHeight;
    if (isOffline) top += offlineNoticeHeight;

    return (
        <View
            accessibilityLabel='InitialLayoutContainer'
            style={{
                height,
                top,
                backgroundColor: "#fff",
            }}
        >
            {children}
        </View>
    );
};

export default InitialLayout;
