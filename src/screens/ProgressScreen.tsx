import { Modal, View } from "react-native";
import type { FC } from "react";

import { AppLottieView } from "@Components/AppComponents";
import * as Progress from "react-native-progress";
import defaultStyles from "@Constants/styles";
import colors from "@Constants/colors";

interface Props {
    visible: boolean;
    progress: number;
    onAnimationFinish: (isCanceled: boolean) => void;
}

const ProgressScreen: FC<Props> = ({
    onAnimationFinish,
    progress = 0,
    visible,
}) => {
    return (
        <Modal visible={visible} animationType='slide'>
            <View style={[defaultStyles.flexCenter, defaultStyles.fullScreen]}>
                {progress < 1 ? (
                    <Progress.Bar
                        color={colors.secondary}
                        progress={progress}
                        width={250}
                    />
                ) : (
                    <AppLottieView
                        source={require("@Animations/done.json")}
                        visible
                        loop={false}
                        onAnimationFinish={onAnimationFinish}
                        size={150}
                    />
                )}
            </View>
        </Modal>
    );
};

export default ProgressScreen;
