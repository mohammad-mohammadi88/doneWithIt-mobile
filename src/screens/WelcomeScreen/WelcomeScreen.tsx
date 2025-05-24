import LogoContainer from '@Components/WelcomeScreen/LogoContainer';
import BtnContainer from '@Components/WelcomeScreen/BtnContainer';
import colors from "@Constants/colors"
import type { FC } from 'react';
import {
    ImageBackground,
    StyleSheet
} from 'react-native';

const WelcomeScreen: FC = () => (
    <ImageBackground resizeMode="cover" source={require("@Images/welcome.jpg")} style={styles.backgroundImage}>
        <LogoContainer />
        <BtnContainer BtnStyle={styles.loginBtn} title='login' />
        <BtnContainer BtnStyle={styles.registerBtn} title='register' />
    </ImageBackground>
)

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: "flex-end",
        overflow: "hidden",
        alignItems: "center"
    },
    loginBtn: {
        backgroundColor: colors.secondary
    },
    registerBtn: {
        backgroundColor: colors.primary
    }
})

export default WelcomeScreen