import { Image, StyleSheet, Text, View } from 'react-native';
import type { FC } from 'react';

const LogoContainer: FC = () => (
    <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("@Images/icon.png")} />
        <Text style={styles.slug}>Sell What You Don't Need</Text>
    </View>
)

const styles = StyleSheet.create({
    logoContainer: {
        position: "absolute",
        top: 80,
        alignItems: "center"
    },
    logo: {
        width: 150,
        height: 150,
    },
    slug: {
        fontSize: 24,
        fontWeight: 700
    }
})

export default LogoContainer