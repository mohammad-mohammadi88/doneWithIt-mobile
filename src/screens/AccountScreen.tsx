import { FlatList, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import type { FC } from "react";

import colors, { grayPressAction } from "@Constants/colors";
import { ListItemSeparator } from "@Components/ListItem";
import type { IconNamesType } from "@Types/globals";
import ListItem from "@Components/ListItem";
import Icon from "@Components/Icon";
import { useAuth } from "@/hooks";

interface MenuItemType {
    id: number;
    title: string;
    icon: {
        name: IconNamesType;
        backgroundColor: string;
    };
    onPress: (e: any) => void;
}

const AccountScreen: FC = () => {
    const router = useRouter();
    const auth = useAuth();
    const menuItems: MenuItemType[] = [
        {
            id: 1,
            title: "My Listings",
            onPress: () => router.navigate("/account/myListings"),
            icon: {
                name: "format-list-bulleted",
                backgroundColor: colors.primary,
            },
        },
        {
            id: 2,
            title: "My Messages",
            onPress: () => router.navigate("/account/myMessages"),
            icon: {
                name: "email",
                backgroundColor: colors.secondary,
            },
        },
    ];

    return (
        auth?.user && (
            <View style={styles.container}>
                <ListItem
                    title={auth.user.name}
                    style={styles.userContainer}
                    image={require("@Images/user.jpg")}
                    subTitle={auth.user.email}
                />
                <View style={styles.menuItemsContainer}>
                    <FlatList
                        data={menuItems}
                        renderItem={({ item: { onPress, title, icon } }) => (
                            <ListItem
                                pressAction={grayPressAction}
                                style={styles.menuItem}
                                onPress={onPress}
                                title={title}
                                ImageReplaceComponent={() => (
                                    <Icon
                                        backgroundColor={icon.backgroundColor}
                                        iconColor='white'
                                        icon={icon.name}
                                        size={40}
                                    />
                                )}
                            />
                        )}
                        ItemSeparatorComponent={ListItemSeparator}
                    />
                </View>
                <ListItem
                    onPress={auth.logOut}
                    pressAction={grayPressAction}
                    style={styles.menuItem}
                    title='log out'
                    ImageReplaceComponent={() => (
                        <Icon
                            backgroundColor='orange'
                            iconColor='white'
                            icon='logout'
                            size={40}
                        />
                    )}
                />
            </View>
        )
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        height: "100%",
    },
    userContainer: {
        padding: 15,
        marginTop: 30,
    },
    menuItemsContainer: {
        marginVertical: 50,
    },
    menuItem: {
        paddingHorizontal: 15,
    },
});

export default AccountScreen;
