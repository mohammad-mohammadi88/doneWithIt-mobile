import { Stack } from "expo-router";
import type { FC } from "react";

const Layout: FC = () => {
    return (
        <Stack
            screenOptions={{
                contentStyle: {
                    backgroundColor: "white",
                },
            }}
        />
    );
};

export default Layout;
