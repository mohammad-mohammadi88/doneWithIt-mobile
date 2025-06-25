import { useWindowDimensions, View } from "react-native";
import type { ReactNode } from "react";

interface Props { children: ReactNode }

const LayoutWithHeader = ({ children }:Props) => {
    const height = useWindowDimensions().height;

    return <View style={{ top: -50, height }}>{children}</View>;
};

export default LayoutWithHeader;
