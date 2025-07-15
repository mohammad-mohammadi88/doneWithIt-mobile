import { Alert, StyleSheet, Text, View } from "react-native";
import { useLayoutEffect, type FC } from "react";

import defaultStyles from "@Constants/styles";
import colors from "@Constants/colors";
import { listingApi } from "@/APIs";
import { useApi } from "@/hooks";

interface Props{
    listingId:number
}
const ListingNameNavbar: FC<Props> = ({listingId}) => {
    console.log("🚀 ~ listingId:", listingId)
    const { error, isLoading, data, request } = useApi(listingApi.getListing);
    console.log("🚀 ~ error:", error)
    console.log("🚀 ~ data:", data)
    useLayoutEffect(() => {
        request<number>(listingId);
    }, []);

    if (error)
        Alert.alert("Error", typeof error === "string" ? error : "Something went wrong while getting listing name");
    return (
        <View style={[styles.container, defaultStyles.flexCenter]}>
            <Text numberOfLines={2} style={[styles.notice, defaultStyles.font]}>
                {error && "Error! Please try again!"}
                {isLoading && "loading ..."}
                {data && !isLoading && (
                    <>
                        <Text style={{ fontWeight: 700 }}>Listing: </Text>
                        <Text>{data.title}</Text>
                    </>
                )}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        top: 0,
        zIndex: 8,
        height: 60,
        width: "100%",
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    notice: {
        color: "white",
    },
});

export default ListingNameNavbar;
