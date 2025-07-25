import { useEffect, useLayoutEffect, useState, type FC } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

import { AppButton, AppLottieView } from "@Components/AppComponents";
import ListItem, { ListItemSeparator } from "@Components/ListItem";
import { grayPressAction } from "@Constants/colors";
import { AppErrorMessage } from "@Components/form";
import type { MessageType } from "@Types/message";
import defaultStyles from "@Constants/styles";
import { messagesApi } from "@/APIs";
import { useApi } from "@/hooks";

const MessagesScreen: FC = () => {
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const {
        data,
        error,
        isLoading,
        request: getMessages,
    } = useApi<MessageType[]>(messagesApi.getMessages);
    const [refreshing] = useState<boolean>(false);
    const router = useRouter();

    const handleDelete = async (messageId: number) => {
        setIsDeleting(true);
        const { ok } = await messagesApi.deleteMessage(messageId);
        if (!ok) return Alert.alert("Error", "Could not delete this message");
        getMessages();
        setIsDeleting(false);
    };
    const handleLongPress = (messageId: number) => {
        Alert.alert("Delete", "Do you want to delete this message?", [
            { text: "Cancel" },
            {
                text: "Yes",
                onPress: () => handleDelete(messageId),
            },
        ]);
    };
    useLayoutEffect(() => {
        getMessages();
    }, []);
    useEffect(() => {
        if (isDeleting) getMessages();
    }, [isDeleting]);

    const messages = (
        <FlatList
            style={styles.container}
            data={data}
            renderItem={({ item: { content, fromUser, id } }) => (
                <ListItem
                    image={require("@Images/user.jpg")}
                    onPress={() =>
                        router.navigate({
                            pathname: "/account/message/[messageId]",
                            params: {
                                messageId: id,
                                username: fromUser.name,
                            },
                        })
                    }
                    onLongPress={() => handleLongPress(id)}
                    pressAction={grayPressAction}
                    style={styles.messageContainer}
                    subTitle={content}
                    title={fromUser?.name}
                />
            )}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => getMessages()}
        />
    );

    const Notice: FC<{ error: string }> = ({ error }) => (
        <View
            style={[
                defaultStyles.flexCenter,
                defaultStyles.fullScreen,
                styles.notice,
            ]}
        >
            <AppErrorMessage size={25} error={error} />
            <AppButton title='reload' onPress={getMessages} />
        </View>
    );

    const isMessagesLoaded = data && !isLoading;
    const isError = error && !isLoading;
    return (
        <>
            <AppLottieView
                isCenter
                source={require("@Animations/loading1.json")}
                visible={isLoading || isDeleting}
            />

            {isMessagesLoaded && data.length > 0 && messages}

            {isMessagesLoaded && data.length === 0 && (
                <Notice error="You don't have any message" />
            )}

            {isError && <Notice error='Could not load your messages' />}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        marginBottom: 20,
        overflow: "hidden",
    },
    messageContainer: {
        padding: 6,
    },
    notice: {
        paddingHorizontal: 15,
    },
});

export default MessagesScreen;
