import { AppButton } from '@Components/AppComponents';
import LogoContainer from '@Components/WelcomeScreen';
import type { FC } from 'react';
import {
    ImageBackground,
    StyleSheet
} from 'react-native';

const WelcomeScreen: FC = () => {
    const handlePress = () => console.log('Pressed!')
    return (
        <ImageBackground resizeMode="cover" blurRadius={1.5} source={require("@Images/welcome.jpg")} style={styles.backgroundImage}>
            <LogoContainer />
            <AppButton onPress={handlePress} title='login' />
            <AppButton
                backgroundColor="primary"
                onPress={handlePress}
                title='register'
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        justifyContent: "flex-end",
        overflow: "hidden",
        alignItems: "center",
        height: "100%",
        paddingHorizontal: 20
    }
})

export default WelcomeScreen