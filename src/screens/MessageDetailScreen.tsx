import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useLayoutEffect, type FC } from "react";

import { ListingNameNavbar, SendMessage } from "@/Components";
import { useApi } from "@/hooks";
import { messagesApi } from "@/APIs";
import defaultStyles from "@/constants/styles";
import { AppErrorMessage } from "@/Components/form";
import { AppLottieView } from "@/Components/AppComponents";
import colors from "@/constants/colors";

const MessageDetailScreen: FC = () => {
    const { messageId } = useLocalSearchParams<{ messageId: string }>();

    const { data, error, isLoading, request } = useApi(
        messagesApi.getMessageWithId
    );
    useLayoutEffect(() => {
        request(messageId);
    }, []);
    if (error)
        return (
            <View style={[defaultStyles.fullScreen, defaultStyles.flexCenter]}>
                <AppErrorMessage
                    size={20}
                    error={
                        typeof error === "string"
                            ? error
                            : "Something went wrong while getting message"
                    }
                />
            </View>
        );
    if (isLoading)
        return (
            <AppLottieView
                isCenter
                visible={isLoading && !error && !data}
                source={require("@Animations/loading1.json")}
            />
        );
    if (!data) return;

    return (
        <View style={defaultStyles.fullScreen}>
            {data.listingId && <ListingNameNavbar listingId={data.listingId} />}
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.messageContent}>{data.content.trim()}</Text>
                </ScrollView>
                <SendMessage visible userId={data?.fromUser?.id} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        flex: 1,
    },
    messageContent: {
        marginHorizontal: "auto",
        backgroundColor: colors.lightGray,
        width: "auto",
        maxWidth: "80%",
        marginTop: 40,
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 20,
        fontSize: 18,
    }
});

export default MessageDetailScreen;
