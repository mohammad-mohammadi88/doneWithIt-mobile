import {
    SafeAreaProvider,
    type SafeAreaViewProps,
    SafeAreaView,
} from "react-native-safe-area-context";
import type { FC, ReactNode } from "react";

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
