import ListItemSeparator from '@Components/ListItem/ListItemSeparator';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '@Components/ListItem';
import { useState, type FC } from 'react';
import ListItemDeleteAction from '@/Components/ListItem/ListItemDeleteAction';

interface MessageType {
    id: number;
    title: string;
    description: string,
    image: any
}
const MessagesScreen: FC = () => {
    const [refreshing, setRefreshing] = useState<boolean>(false)
    const [messages, setMessages] = useState<MessageType[]>([
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
    ]);
    const handleDeleteMessage = (deleteId:number) =>{
        setMessages(c => c.filter(({id})=> id !== deleteId))
    }
    
    return (
        <FlatList
            style={styles.container}
            data={messages}
            renderItem={({ item: { title, description, image,id } }) => (
                <ListItem
                    onPress={() => handleDeleteMessage(id)}
                    style={styles.messageContainer}
                    subTitle={description}
                    image={image}
                    title={title}
                    dragableOptions={{
                        SWIPE_THRESHOLD: -50,
                        dragFn:() => handleDeleteMessage(id),
                        RightDragComponent:() => <ListItemDeleteAction />
                    }}
                />
            )}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                const mm = [];
                for(let i = 1;i <= Math.ceil(Math.random() * 10);i++){
                    mm.push({
                        id: i,
                        title: "title "+i,
                        description: "desc "+i,
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
        padding: 5
    },
    container:{
        height:"100%"
    }
})

export default MessagesScreen