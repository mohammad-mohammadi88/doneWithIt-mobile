import { LayoutWithHeader } from "@/Components";
import { Stack } from "expo-router";
import type { FC } from "react";

const Layout: FC = () => {
    return (
        <Stack
        layout={LayoutWithHeader}
            screenOptions={{
                contentStyle: { backgroundColor: "white" },
            }}
        >
            <Stack.Screen name="index" options={{
                title: "Add Listing"
            }}/>
        </Stack>
    );
};

export default Layout;