import { useWindowDimensions } from "react-native";
import { useEffect, useState, type FC } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

// Keep the splash screen visible while we fetch resources
import { InitLayout, OfflineNotice } from "@/Components";
import Redirector from "@/Components/Redirector";
import AuthContext from "@/auth/Context";
import { useIsOffline } from "@/hooks";

async function hideSplash() {
    
    const ff = await SplashScreen.preventAutoHideAsync();
    console.log("🚀 ~ hideSplash ~ ff:", ff)
}
hideSplash()

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
                    backgroundColor: "white",
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
