import { Stack } from "expo-router";
import type { FC } from "react";

import { LayoutWithHeader } from "@/Components";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const Layout: FC = () => {
    const tabbarHeight = useBottomTabBarHeight()
    return (
        <Stack
            screenOptions={{
                contentStyle: { backgroundColor: "#fff" },
                headerShown: true,
                statusBarHidden: true,
            }}
            layout={({ children }) => (
                <LayoutWithHeader tabbarHeight={tabbarHeight}>{children}</LayoutWithHeader>
            )}
        >
            <Stack.Screen
                name='myMessages'
                options={{
                    title: "My Messages",
                }}
            />
            <Stack.Screen
                name='myListings'
                options={{
                    title: "My Listings",
                    
                }}
            />
        </Stack>
    );
};

export default Layout;
