import { initialPressAction } from '@Constants/colors';
import type { FC } from 'react';
import {
    PressableAndroidRippleConfig,
    type PressableProps,
    type StyleProp,
    type ViewStyle,
    Pressable,
    Platform,
} from 'react-native';

interface AppPressableProps {
    style?: StyleProp<ViewStyle>,
    pressAction?: {
        android_ripple: PressableAndroidRippleConfig,
        highlightColor: string
    }
}
const AppPressable: FC<AppPressableProps & PressableProps> = ({ children, style, pressAction = initialPressAction, ...props }) => {
    const { highlightColor, android_ripple } = pressAction;
    const handleStyle = ({ pressed }: { pressed: boolean }) => [
        style,
        pressed && Platform.OS !== "android" && { backgroundColor: highlightColor }
    ]
    return (
        <Pressable
            android_ripple={android_ripple}
            style={handleStyle}
            {...props}
        >
            {children}
        </Pressable>
    )
}

export default AppPressable