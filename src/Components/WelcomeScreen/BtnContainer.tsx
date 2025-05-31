import colors, { grayPressAction } from '@Constants/colors';
import { StyleSheet, Text, ViewStyle } from 'react-native';
import type { AppColorsType } from '@Constants/colors';
import defaultStyles from '@Constants/styles';
import AppPressable from '../AppPressable';
import type { FC } from 'react';

interface Props {
    BtnStyle?: ViewStyle;
    title: string,
    backgroundColor?: AppColorsType,
    onPress: (e: any) => void
}

const BtnContainer: FC<Props> = ({ BtnStyle = {}, onPress, title, backgroundColor = "secondary" }) => (
    <AppPressable
        style={[ styles.btn, BtnStyle, { backgroundColor: colors[ backgroundColor ] ?? backgroundColor } ]}
        onPress={onPress}
        pressAction={grayPressAction}
    >
        <Text style={styles.btnText}>{title}</Text>
    </AppPressable>
)

const styles = StyleSheet.create({
    btn: {
        ...defaultStyles.flexCenter,
        width: "100%",
        height: 70,
        borderRadius: 100,
        margin: 13
    },
    btnText: {
        fontSize: 20,
        color: "white",
        fontWeight: 600,
        textTransform: "uppercase",
        fontFamily: defaultStyles.font.fontFamily,
    },
})

export default BtnContainer