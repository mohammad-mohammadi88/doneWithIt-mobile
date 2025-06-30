import { Dimensions, View } from "react-native";
import Constants from "expo-constants";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    tabbarHeight?: number;
}

const LayoutWithHeader = ({ children, tabbarHeight }: Props) => {
    let height = Dimensions.get("screen").height;

    tabbarHeight && (height -= tabbarHeight);

    const top = -Constants.statusBarHeight;
    return <View style={{ top, height }}>{children}</View>;
};

export default LayoutWithHeader;
