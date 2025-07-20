import { ImageBackground, StyleSheet } from "react-native";
import { AppButton } from "@Components/AppComponents";
import LogoContainer from "@Components/WelcomeScreen";
import { useRouter } from "expo-router";
import type { FC } from "react";

import colors from "@Constants/colors";

const WelcomeScreen: FC = () => {
    const router = useRouter();
    return (
        <ImageBackground
            resizeMode='cover'
            blurRadius={1.5}
            source={require("@Images/welcome.jpg")}
            style={styles.backgroundImage}
        >
            <LogoContainer />
            <AppButton
                onPress={() => router.navigate("/auth/login")}
                title='login'
            />
            <AppButton
                backgroundColor={colors.primary}
                onPress={() => router.navigate("/auth/register")}
                title='register'
                BtnStyle={{ marginBottom: 30 }}
            />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        justifyContent: "flex-end",
        overflow: "hidden",
        alignItems: "center",
        height: "100%",
        paddingHorizontal: 20,
    },
});

export default WelcomeScreen;
