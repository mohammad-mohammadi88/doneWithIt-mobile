import { Stack } from "expo-router";
import type { FC } from "react";

import { LayoutWithHeader } from "@/Components";

const Layout: FC = () => {
    return (
        <Stack
            layout={LayoutWithHeader}
            screenOptions={{
                contentStyle: { backgroundColor: "white" },
            }}
        />
    );
};

export default Layout;
