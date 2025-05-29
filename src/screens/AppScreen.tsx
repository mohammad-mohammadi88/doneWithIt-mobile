import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import type { FC, ReactNode } from 'react';

interface Props { children: ReactNode }

const AppScreen: FC<Props> = ({ children }) =>  (
    <GestureHandlerRootView>
        <SafeAreaProvider>
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    </GestureHandlerRootView>
)

export default AppScreen