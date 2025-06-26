import { useEffect, useState, type FC } from "react";
import { useWindowDimensions } from "react-native";
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
    const window = useWindowDimensions();
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
                <InitLayout isOffline={isOffline} window={window}>
                    {children}
                </InitLayout>
            )}
        />
    );
};
export default Layout;
