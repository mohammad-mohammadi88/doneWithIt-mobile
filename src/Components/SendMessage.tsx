import { Alert, StyleSheet, View } from "react-native";
import { useState, type FC, type Dispatch, type SetStateAction } from "react";

import { AppButton, AppLottieView, AppTextInput } from "./AppComponents";
import { useIsOffline } from "@/hooks";
import { messagesApi } from "@/APIs";
import Overlay from "./Overlay";

interface Props {
    listingId?: string | number;
    userId?: string | number;
    visible: boolean;
    setVisible?: Dispatch<SetStateAction<boolean>>;
}

const SendMessage: FC<Props> = ({ listingId, userId, setVisible, visible }) => {
    let messageIdentify;
    if (listingId) messageIdentify = { listingId };
    else if (userId && !listingId) messageIdentify = { userId };
    else return null;
    const isOffline = useIsOffline();
    const [isSending, setIsSending] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    if (!visible || isOffline) return null;

    const handleMessage = async () => {
        setIsSending(true);
        const { ok, data }: any = await messagesApi.sendMessage(
            message,
            messageIdentify
        );

        if (ok) Alert.alert("Sent", "Your Message Sent", [{ text: "ok" }]);
        else {
            console.log(data);
            if (data?.error) {
                if (typeof data.error === "string") alert(data.error);
                else alert(data.error.join("\n"));
            } else alert("Could not update your listing");
        }

        setMessage("");
        setIsSending(false);
        if (setVisible) setVisible(false);
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
                <AppTextInput
                    value={message}
                    setValue={text=>setMessage(text.trim())}
                    placeholder='Send Message...'
                />
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
