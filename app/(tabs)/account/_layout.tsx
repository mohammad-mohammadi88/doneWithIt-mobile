import { Stack } from "expo-router";
import type { FC } from "react";

const Layout: FC = () => {
    return (
        <Stack>
            <Stack.Screen
                name='index'
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='(accountScreens)'
                options={{ headerShown: false }}
            />
        </Stack>
    );
};

export default Layout;
