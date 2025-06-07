import { FlatList, StyleSheet } from 'react-native';
import { grayPressAction } from '@Constants/colors';
import { useState, type FC } from 'react';
import ListItem, {
    ListItemDeleteAction,
    ListItemSeparator
} from '@Components/ListItem';

interface MessageType {
    id: number;
    title: string;
    description: string,
    image: any
}
const MessagesScreen: FC = () => {
    const [ refreshing ] = useState<boolean>(false)
    const [ messages, setMessages ] = useState<MessageType[]>([
        {
            id: 1,
            title: "title 1",
            description: "desc 1",
            image: require("@Images/user.jpg")
        },
        {
            id: 2,
            title: "title 2",
            description: "desc 2",
            image: require("@Images/user.jpg")
        },
        {
            id: 3,
            title: "title 3",
            description: "desc 3",
            image: require("@Images/user.jpg")
        },
    ])

    return (
        <FlatList
            style={styles.container}
            data={messages}
            renderItem={({ item: { title, description, image, id } }) => (
                <ListItem
                    onPress={() => console.log(id)}
                    style={styles.messageContainer}
                    subTitle={description}
                    pressAction={grayPressAction}
                    image={image}
                    title={title}
                    dragableOptions={{
                        SWIPE_THRESHOLD: -50,
                        dragFn: () => setMessages(c => c.filter((message)=> message.id !== id)),
                        RightDragComponent: () => <ListItemDeleteAction />
                    }}
                />
            )}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                const mm = [];
                for (let i = 1; i <= Math.ceil(Math.random() * 10); i++) {
                    mm.push({
                        id: i,
                        title: "title " + i,
                        description: "desc " + i,
                        image: require("@Images/user.jpg")
                    })
                }
                setMessages(mm)
            }}
        />
    )
}

const styles = StyleSheet.create({
    messageContainer: {
        padding: 5,
    },
    container: {
        height: "100%"
    }
})

export default MessagesScreen