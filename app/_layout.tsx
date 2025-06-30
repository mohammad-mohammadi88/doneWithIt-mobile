import { useEffect, useState, type FC } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";

import { InitLayout, OfflineNotice, Redirector } from "@/Components";
import AuthContext from "@/auth/Context";
import { useIsOffline } from "@/hooks";

const showSplash = async () => await SplashScreen.preventAutoHideAsync();

showSplash();

const Layout: FC = () => {
    const [isAppReady, setIsAppReady] = useState<boolean>(false);
    useEffect(() => {
        if (!isAppReady) return;
        const hide = async () => {
            try {
                await SplashScreen.hideAsync();
            } catch (err) {
                console.warn("error hiding splash screen: ", err);
            }
        };

        hide();
    }, [isAppReady]);
    return (
        <AuthContext isAppReady={isAppReady} setIsAppReady={setIsAppReady}>
            <Redirector />
            <OfflineNotice />
            <AppNavigator />
        </AuthContext>
    );
};

const AppNavigator = () => {
    const isOffline = useIsOffline();
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: "#fff",
                },
            }}
            screenLayout={({ children }) => (
                <InitLayout isOffline={isOffline}>
                    {children}
                </InitLayout>
            )}
        />
    );
};
export default Layout;
