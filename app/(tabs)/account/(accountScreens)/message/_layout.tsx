import { Stack, useLocalSearchParams } from "expo-router";
import type { FC } from "react";

import { capitalize } from "@/utilities";

const Layout: FC = () => {
    const { username } = useLocalSearchParams<{ username: string }>();
    return (
        <Stack screenOptions={{
            contentStyle:{
                backgroundColor: "white"
            }
        }}>
            <Stack.Screen
                name='[messageId]'
                options={{
                    title: capitalize(username) ?? "User",
                }}
            />
        </Stack>
    );
};

export default Layout;
