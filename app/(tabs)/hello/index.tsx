import AppPressable from '@Components/AppPressable';
import { Link } from 'expo-router';
import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const index :FC = () => {
    return (
        <View style={styles.container}>
            <AppPressable >
                <View></View>
            </AppPressable>
            <Link href={"/"}>index</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    text:{
        fontSize:30,
        fontWeight: 800,
        // textTransform:"none",
        // textDecorationLine:"underline line-through",
        // lineHeight:50,
        textAlign:"justify"     
    }
})

export default index