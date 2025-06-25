import { Stack } from "expo-router";
import type { FC } from "react";

import { InitLayout, OfflineNotice } from "@/Components";

const Layout: FC = () => {
    return (
        <>
            <OfflineNotice />
            <Stack
                screenOptions={{ headerShown: false,contentStyle:{
                    backgroundColor: "white",
                    
                } }}
                initialRouteName='(tabs)'
                screenLayout={InitLayout}
            >
                <Stack.Screen name='(tabs)' />
                <Stack.Screen name='welcome' />
                <Stack.Screen name='auth' />
            </Stack>
        </>
    );
};

export default Layout;
