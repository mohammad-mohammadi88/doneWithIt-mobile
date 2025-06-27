import { useWindowDimensions, View } from "react-native";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    tabbarHeight?:number
}

const LayoutWithHeader = ({ children,tabbarHeight }: Props) => {
    let height = useWindowDimensions().height;

    tabbarHeight && (height -= tabbarHeight);

    return <View style={{ top: -50, height }}>{children}</View>;
};

export default LayoutWithHeader;
