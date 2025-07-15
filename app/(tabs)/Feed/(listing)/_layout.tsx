import { LayoutWithHeader } from "@/Components";
import { Stack } from "expo-router";
import type { FC } from "react";

const _layout: FC = () => (
    <Stack
        layout={LayoutWithHeader}
        screenOptions={{ contentStyle: { backgroundColor: "#fff" } }}
    >
        <Stack.Screen name='edit/[id]' options={{ title: "Edit Listing" }} />
    </Stack>
);

export default _layout;
