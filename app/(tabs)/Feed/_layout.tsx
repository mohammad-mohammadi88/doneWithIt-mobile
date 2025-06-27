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
                name='(modals)/listingDetail'
                options={{
                    presentation: "formSheet",
                }}
            />
            <Stack.Screen
                name='(modals)/viewImage'
                options={{
                    presentation: "formSheet",
                }}
            />
        </Stack>
    );
};

export default Layout;
