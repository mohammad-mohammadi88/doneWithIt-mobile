import type { FC } from 'react';
import { grayPressAction } from '@Constants/colors';
import defaultStyles from '@Constants/styles';
import AppPressable from './AppPressable';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface PickerOptionsProps{
    onPress: (e:any) => void,
    label: string,
}
const PickerOptions:FC<PickerOptionsProps> = ({label,onPress}) => (
    <AppPressable style={styles.pickerOption} onPress={onPress} pressAction={grayPressAction}>
        <View>
            <Text style={[defaultStyles.font,styles.pickerOptionLabel]}>{label}</Text>
        </View>
    </AppPressable>
)

const styles = StyleSheet.create({
    pickerOption: {
        alignItems: "center",
        width: "100%",
        paddingVertical: 15
    },
    pickerOptionLabel: {
        width: "100%",
        textTransform: "capitalize"
    }
})
export default PickerOptions