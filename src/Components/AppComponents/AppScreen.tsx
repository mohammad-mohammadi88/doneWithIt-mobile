import { SafeAreaProvider, SafeAreaView, type SafeAreaViewProps } from "react-native-safe-area-context";
import type { FC, ReactNode } from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface Props { children: ReactNode }

const AppScreen: FC<Props & SafeAreaViewProps> = ({ children,...props }) =>  (
    <GestureHandlerRootView>
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }} {...props}>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    </GestureHandlerRootView>
)

export default AppScreen