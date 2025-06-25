import { useWindowDimensions, View } from "react-native";
import type { ReactNode } from "react";
import Constants from "expo-constants";

import { useIsOffline } from "@/hooks";

interface Props {
    children: ReactNode;
}

const InitialLayout: any = ({ children }: Props) => {
    const isOffline = useIsOffline();
    // Status Bar Height
    const SBHeight = Constants.statusBarHeight;

    let height = useWindowDimensions().height - SBHeight;
    if (isOffline) height -= 50;

    let top = SBHeight;
    if(isOffline) top += 50

    return (
        <View
            style={{
                height,
                top,
            }}
        >
            {children}
        </View>
    );
};

export default InitialLayout;
