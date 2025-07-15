import type { FC, ReactNode } from "react";
import {
    SafeAreaProvider,
    type SafeAreaViewProps,
    SafeAreaView,
} from "react-native-safe-area-context";

interface Props {
    children: ReactNode;
}

const Screen: FC<Props & SafeAreaViewProps> = ({ children, ...props }) => (
    <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }} {...props}>
            {children}
        </SafeAreaView>
    </SafeAreaProvider>
);

export default Screen;
