import { Stack } from "expo-router";
import type { FC } from "react";

const Layout: FC = () => {
    return (
        <Stack
            screenOptions={{
                contentStyle: { backgroundColor: "#fefefe" },
                headerShown: false,
            }}
        >
            <Stack.Screen
                name='index'
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='(modals)/ListingDetail'
                options={{
                    presentation: "formSheet",
                }}
            />
        </Stack>
    );
};

export default Layout;
