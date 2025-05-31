import ListItemSeparator from '@Components/ListItem/ListItemSeparator';
import colors, { grayPressAction } from '@Constants/colors';
import { FlatList, StyleSheet, View } from 'react-native';
import { IconNamesType } from '@Types/MaterialIcons';
import ListItem from '@Components/ListItem';
import Icon from '@Components/Icon';
import type { FC } from 'react';

interface MenuItemType{
    id:number;
    title: string,
    icon:{
        name: IconNamesType,
        backgroundColor: string
    },
    onPress: (e:any) => void
}

const menuItems:MenuItemType[] = [
    {
        id:1,
        title: "My Listings",
        onPress(){
            console.log("My Listings")
        },
        icon:{
            name:"format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        id:2,
        title: "My Messages",
        onPress(){
            console.log("My Messages")
        },
        icon:{
            name:"email",
            backgroundColor: colors.secondary
        }
    },
];
const AccountScreen: FC = () => {
    return (
        <View style={styles.container}>
            <ListItem
                title="mohammad mohammadi"
                style={styles.userContainer}
                onPress={() => console.log("hello dear")}
                image={require("@Images/user.jpg")}
                subTitle='mohammaddev09@gmail.com'
            />
            <View style={styles.menuItemsContainer}>
                <FlatList
                    data={menuItems}
                    renderItem={({item:{onPress,title,icon}})=><ListItem
                        pressAction={grayPressAction}
                        style={styles.menuItem}
                        onPress={onPress}
                        title={title}
                        ImageReplaceComponent={() => <Icon
                            backgroundColor={icon.backgroundColor}
                            iconColor='white'
                            icon={icon.name}
                            size={40}
                        />}
                    />}    
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <ListItem
                onPress={() => console.log("log out")}
                pressAction={grayPressAction}
                style={styles.menuItem}
                title="log out"
                ImageReplaceComponent={() => <Icon
                    backgroundColor="orange"
                    iconColor='white'
                    icon="logout"
                    size={40}
                />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        height: "100%",
    },
    userContainer: {
        padding:15,
    },
    menuItemsContainer:{
        marginVertical:50
    },
    menuItem:{
        paddingHorizontal:15
    }
})

export default AccountScreen