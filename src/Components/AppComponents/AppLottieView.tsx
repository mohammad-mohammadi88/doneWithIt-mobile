import LottieView, { LottieViewProps } from "lottie-react-native";
import { View } from "react-native";
import type { FC } from "react";

import defaultStyles from "@Constants/styles";

interface Props extends Omit<LottieViewProps, "autoPlay"> {
    isCenter?: boolean;
    size?: number;
    source: any;
    visible?: boolean;
}

const AppLottieView: FC<Props> = ({
    isCenter = false,
    visible = false,
    size = 300,
    ...props
}) => {
    if (!visible) return null;
    const Lottie = (
        <LottieView
            autoPlay
            style={{
                height: size,
                width: size,
                backgroundColor: "transparent",
            }}
            testID="lottieAnimation"
            {...props}
        />
    );
    return isCenter ? (
        <View style={[defaultStyles.flexCenter, defaultStyles.fullScreen]}>
            {Lottie}
        </View>
    ) : (
        Lottie
    );
};

export default AppLottieView;
