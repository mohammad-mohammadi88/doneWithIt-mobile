import { Image, Pressable, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppPressable } from '@Components/AppComponents';
import defaultStyles from '@Constants/styles';
import type { FC } from "react";

const ViewImageScreen: FC = () => (
    <View style={styles.container}>
        <View style={styles.btnContainer}>

            <AppPressable onPress={() => console.log("close")}>
                <MaterialCommunityIcons name='close' size={35} color="white" />
            </AppPressable>

            <Pressable onPress={() => console.log("delete")}>
                <MaterialCommunityIcons name='trash-can-outline' size={35} color="white" />
            </Pressable>

        </View>
        <Image style={styles.image} resizeMode="contain" source={require("@Images/chairImage.png")} />
    </View>
)


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1
    },
    image: defaultStyles.fullScreen,
    btnContainer: {
        justifyContent: "space-between",
        paddingHorizontal: 15,
        position: "absolute",
        flexDirection: "row",
        width: "100%",
        top: 20,
        zIndex: 50
    }
})

export default ViewImageScreen