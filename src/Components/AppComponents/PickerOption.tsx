import type { FC } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { grayPressAction } from '@Constants/colors';
import defaultStyles from '@Constants/styles';
import AppPressable from './AppPressable';

interface PickerOptionProps {
    onPress: (e: any) => void,
    item: {
        label: string
    },
}
const PickerOption: FC<PickerOptionProps> = ({ item, onPress }) => (
    <AppPressable style={styles.pickerOption} onPress={onPress} pressAction={grayPressAction}>
        <View>
            <Text style={[ defaultStyles.font, styles.pickerOptionLabel ]}>{item.label}</Text>
        </View>
    </AppPressable>
)

const styles = StyleSheet.create({
    pickerOption: {
        alignItems: "center",
        width: "100%",
        paddingVertical: 15,
    },
    pickerOptionLabel: {
        width: "100%",
        textTransform: "capitalize"
    }
})
export default PickerOption