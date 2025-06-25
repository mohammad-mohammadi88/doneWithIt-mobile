import { AppLottieView } from "@Components/AppComponents";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import defaultStyles from "@Constants/styles";
import colors from "@Constants/colors";
import type { FC } from "react";

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
const styles = StyleSheet.create({});

export default ProgressScreen;
