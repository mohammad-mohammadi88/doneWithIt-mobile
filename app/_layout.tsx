import { Stack } from "expo-router";
import type { FC } from "react";

const Layout: FC = () => {
    return (
        <Stack screenOptions={{ headerShown: false }} initialRouteName='(tabs)'>
            <Stack.Screen name='(tabs)' />
            <Stack.Screen name='index' />
            <Stack.Screen name="auth" />
        </Stack>
    );
};

export default Layout;
