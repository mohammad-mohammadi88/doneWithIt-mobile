import { type ScaledSize, View } from "react-native";
import type { FC, ReactNode } from "react";
import Constants from "expo-constants";

interface Props {
    children: ReactNode;
    isOffline:boolean,
    window: ScaledSize
}

const InitialLayout: FC<Props> = ({ children,isOffline,window }) => {
    // Status Bar Height
    const SBHeight = Constants.statusBarHeight;

    let height = window.height - SBHeight;
    if (isOffline) height -= 50;

    let top = SBHeight;
    if(isOffline) top += 50

    return (
        <View
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
