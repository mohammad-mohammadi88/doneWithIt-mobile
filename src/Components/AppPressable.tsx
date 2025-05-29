import type { FC } from 'react';
import {
    type PressableProps,
    type StyleProp,
    type ViewStyle,
    Pressable,
    Platform
} from 'react-native';

interface AppPressableProps{
    highlightColor?: string,
    style?:StyleProp<ViewStyle>
}
const AppPressable: FC<AppPressableProps & PressableProps> = ({ children,style,highlightColor = "#eee", android_ripple = { color: "oklch(87% 0 0)" }, ...props }) => {
    const handleStyle = ({pressed}:{pressed:boolean}) => [
        style,
        pressed && Platform.OS !== "android" && {backgroundColor: highlightColor}
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