import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import colors, { initialPressAction } from '@Constants/colors';
import React, { memo, type FC } from 'react';
import AppPressable from '../AppPressable';

import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from 'react-native-reanimated';
import {
    StyleSheet,
    StyleProp,
    ViewStyle,
    Image,
    Text,
    View,
    PressableAndroidRippleConfig,
} from 'react-native';

interface DragInterface {
    RightDragComponent: () => React.JSX.Element;
    SWIPE_THRESHOLD: number,
    dragFn: () => void;
}


interface Props {
    image?: any,
    title: string,
    subTitle?: string,
    style?: StyleProp<ViewStyle>,
    onPress: (e: any) => void,
    dragableOptions?: DragInterface,
    ImageReplaceComponent?: () => React.JSX.Element,
    pressAction?: {
        android_ripple: PressableAndroidRippleConfig,
        highlightColor: string
    }
}

const ListItem: FC<Props> = ({
    pressAction,
    ImageReplaceComponent,
    dragableOptions,
    style = {},
    subTitle,
    onPress,
    title,
    image,
}) => {
    const BaseComponent = (
    <AppPressable
        pressAction={pressAction}
        style={[ styles.item, style ]}
        onPress={onPress}
    >
        {ImageReplaceComponent && <ImageReplaceComponent />}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.infoContainer}>
            <Text numberOfLines={1} style={styles.title}>{title}</Text>
            {subTitle && <Text numberOfLines={1} style={styles.subTitle}>{subTitle}</Text>}
        </View>
    </AppPressable>)



    if (typeof dragableOptions === "undefined") {
        return BaseComponent
    } else {
        const { dragFn, RightDragComponent, SWIPE_THRESHOLD } = dragableOptions;
        const translateX = useSharedValue(0);
        const panGesture = Gesture.Pan()
            .onUpdate((event) => {
                if (event.translationX < 0) {
                    event.translationX < SWIPE_THRESHOLD
                        ? translateX.set(withSpring(SWIPE_THRESHOLD))
                        : translateX.set(withSpring(event.translationX))
                }
            })
            .onEnd(() => {
                if (translateX.value <= SWIPE_THRESHOLD) dragFn();
                translateX.set(withSpring(0))
            });

        const animatedStyle = useAnimatedStyle(() => ({
            transform: [ { translateX: translateX.value } ]
        }))
        return (
            <>
                <View style={styles.dragBox}>
                    <RightDragComponent />
                </View>
                <GestureDetector gesture={panGesture}>
                    <Animated.View style={animatedStyle}>
                        {BaseComponent}
                    </Animated.View>
                </GestureDetector>
            </>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: "center",
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    infoContainer: {
        marginLeft: 10,
        height: 70,
        flex: 1,
        justifyContent: "center",
        textOverflow: "hidden",
    },
    dragBox: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
        textTransform: "capitalize",
    },
    subTitle: {
        fontSize: 18,
        color: colors.medium,
        marginTop: 5,
    }
})

export default memo(ListItem)