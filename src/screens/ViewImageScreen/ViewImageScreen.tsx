import { Image, StyleSheet, View } from 'react-native';
import colors from "@Constants/colors";
import type { FC } from "react"

const ViewImageScreen: FC = () => (
    <View style={styles.container}>
        <View style={styles.btnContainer}>
            <View style={[ styles.topBtn, styles.deleteBtn ]}></View>
            <View style={[ styles.topBtn, styles.closeBtn ]}></View>
        </View>
        <Image style={styles.image} resizeMode="contain" source={require("@Images/chairImage.png")} />
    </View>
)


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1
    },
    image: {
        height: "100%",
        width: "100%"
    },
    btnContainer: {
        justifyContent: "space-between",
        paddingHorizontal: 15,
        position: "absolute",
        flexDirection: "row",
        width: "100%",
        top: 20
    },
    topBtn: {
        borderRadius: 100,
        height: 55,
        width: 55
    },
    deleteBtn: { backgroundColor: colors.secondary },
    closeBtn: { backgroundColor: colors.primary }
})

export default ViewImageScreen