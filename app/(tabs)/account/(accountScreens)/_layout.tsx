import { Stack } from "expo-router";
import type { FC } from "react";

import { LayoutWithHeader } from "@/Components";

const Layout: FC = () => {
    return (
        <Stack
            screenOptions={{
                contentStyle: { backgroundColor: "#fff" },
                headerShown: true,
                statusBarHidden: true,
            }}
            layout={({ children }) => (
                <LayoutWithHeader isTabbarShown>{children}</LayoutWithHeader>
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
