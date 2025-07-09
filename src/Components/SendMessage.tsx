import { Alert, StyleSheet, View } from "react-native";
import { useState, type FC } from "react";

import { AppButton, AppLottieView, AppTextInput } from "./AppComponents";
import { messagesApi } from "@/APIs";
import Overlay from "./Overlay";
import { useIsOffline } from "@/hooks";

interface Props {
    listingId: string;
    visible: boolean;
}

const SendMessage: FC<Props> = ({ listingId, visible }) => {
    const isOffline = useIsOffline();
    const [isSending, setIsSending] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    if (!visible || isOffline) return null;

    const handleMessage = async () => {
        setIsSending(true);
        const { ok } = await messagesApi.sendMessage(message, listingId);
        const alertMessage = ok
            ? "Your Message Sent"
            : "Unexpected error happend";
        Alert.alert(ok ? "Sent" : "Error", alertMessage, [{ text: "ok" }]);
        setMessage("");
        setIsSending(false);
    };
    return (
        <>
            <Overlay visible={isSending}>
                <AppLottieView
                    source={require("@Animations/loading2.json")}
                    visible
                />
            </Overlay>
            <View style={styles.container}>
                <AppTextInput value={message} setValue={setMessage} placeholder="Send Message..." />
                <AppButton onPress={handleMessage} title='send message' />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 10,
        padding: 20,
    },
});

export default SendMessage;
