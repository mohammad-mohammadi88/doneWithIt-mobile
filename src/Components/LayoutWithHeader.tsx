import { useWindowDimensions, View } from "react-native";
import type { ReactNode } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

interface Props {
    children: ReactNode;
    isTabbarShown?: boolean;
}

const LayoutWithHeader = ({ children, isTabbarShown = false }: Props) => {
    // Tab Bar Height
    const TBHeight = useBottomTabBarHeight();
    let height = useWindowDimensions().height;
    isTabbarShown && (height -= TBHeight);

    return <View style={{ top: -50, height }}>{children}</View>;
};

export default LayoutWithHeader;
