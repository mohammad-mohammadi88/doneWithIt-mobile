import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Tabs } from "expo-router";
import type { FC } from "react";

import colors, { initialPressAction } from "@Constants/colors";
import { AppPressable } from "@Components/AppComponents";
import defaultStyles from "@Constants/styles";

const Layout: FC = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "red",
                headerShown: false,
                tabBarStyle: {
                    borderTopRightRadius: 25,
                    borderTopLeftRadius: 25,
                    height: 70,
                },
                tabBarButton: ({ children, android_ripple, ...props }) => {
                    return (
                        <AppPressable
                            android_ripple={initialPressAction.android_ripple}
                            {...props}
                        >
                            {children}
                        </AppPressable>
                    );
                },
            }}
        >
            <Tabs.Screen
                name='Feed'
                options={{
                    title: "Feed",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name='home'
                            size={size + 5}
                            color={color}
                        />
                    ),
                    tabBarLabelStyle: styles.tabText,
                }}
            />
            <Tabs.Screen
                name='addListing'
                options={{
                    title: "",
                    tabBarIcon: () => (
                        <View
                            style={[
                                styles.addListingContainer,
                                defaultStyles.flexCenter,
                            ]}
                        >
                            <MaterialCommunityIcons
                                name='plus-circle'
                                size={50}
                                color={"white"}
                            />
                        </View>
                    ),
                    tabBarItemStyle: {
                        justifyContent: "center",
                        alignItems: "center",
                        top: -10,
                    },
                }}
            />
            <Tabs.Screen
                name='account'
                options={{
                    title: "account",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name='account'
                            size={size + 5}
                            color={color}
                        />
                    ),
                    tabBarLabelStyle: styles.tabText
                }}
            />
        </Tabs>
    );
};

const styles = StyleSheet.create({
    addListingContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.secondary,
        position: "absolute",
    },
    tabText: {
        fontSize: 16,
    },
});
export default Layout;
