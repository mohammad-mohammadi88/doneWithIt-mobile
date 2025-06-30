import { Dimensions, View } from "react-native";
import type { FC, ReactNode } from "react";
import Constants from "expo-constants";

interface Props {
    children: ReactNode;
    isOffline:boolean,
}


const InitialLayout: FC<Props> = ({ children,isOffline }) => {
    // Status Bar Height
    const SBHeight = Constants.statusBarHeight;
    
    let height = Dimensions.get("screen").height - SBHeight
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
