import LottieView, { LottieViewProps } from "lottie-react-native";
import type { FC } from "react";

interface Props extends Omit<LottieViewProps , "autoPlay"> {
    visible?: boolean;
    source: any;
    size?: number;
}

const AppLottieView: FC<Props> = ({
    visible = false,
    size = 300,
    ...props
}) => {
    if (!visible) return null;
    return (
        <LottieView
            autoPlay
            style={{
                height: size,
                width: size,
                backgroundColor: "transparent",
            }}
            {...props}
        />
    );
};

export default AppLottieView;
