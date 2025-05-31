import { Platform, StyleSheet } from "react-native";

const defaultStyles = StyleSheet.create({
    font: {
        fontSize: 20,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    },
    flexCenter: {
        alignContent: "center",
        justifyContent: "center"
    },
    fullScreen:{
        height: "100%",
        width: "100%"
    }
})

export default defaultStyles