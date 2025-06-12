import { Alert, FlatList, StyleSheet } from "react-native";
import { grayPressAction } from "@Constants/colors";
import { useState, type FC } from "react";
import ListItem, {
    ListItemDeleteAction,
    ListItemSeparator,
} from "@Components/ListItem";

interface MessageType {
    id: number;
    title: string;
    description: string;
    image: any;
}
const MessagesScreen: FC = () => {
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [messages, setMessages] = useState<MessageType[]>([
        {
            id: 1,
            title: "title 1",
            description: "desc 1",
            image: require("@Images/user.jpg"),
        },
        {
            id: 2,
            title: "title 2",
            description: "desc 2",
            image: require("@Images/user.jpg"),
        },
        {
            id: 3,
            title: "title 3",
            description: "desc 3",
            image: require("@Images/user.jpg"),
        },
    ]);
    const handleLongPress = (id: number) => {
        console.log("pressss"),
            Alert.alert("Delete", "Do you want to delete this chat?", [
                {
                    text: "Cancel",
                },
                {
                    text: "Yes",
                    onPress: () =>
                        setMessages((c) => c.filter((chat) => chat.id !== id)),
                },
            ]);
    };

    return (
        <FlatList
            style={styles.container}
            data={messages}
            renderItem={({ item: { title, description, image, id } }) => (
                <ListItem
                    onPress={() => {
                        setRefreshing(true);
                        setRefreshing(false);
                    }}
                    style={styles.messageContainer}
                    onLongPress={() => handleLongPress(id)}
                    subTitle={description}
                    pressAction={grayPressAction}
                    image={image}
                    title={title}
                />
            )}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                const mm = [];
                for (let i = 1; i <= Math.ceil(Math.random() * 10 + 10); i++) {
                    mm.push({
                        id: i,
                        title: "title " + i,
                        description: "desc " + i,
                        image: require("@Images/user.jpg"),
                    });
                }
                setMessages(mm);
            }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    messageContainer: {
        padding: 6,
    },
});

export default MessagesScreen;
