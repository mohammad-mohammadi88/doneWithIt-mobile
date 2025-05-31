import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { Dispatch, FC, SetStateAction } from 'react';
import { IconNamesType } from '@Types/MaterialIcons';
import defaultStyles from '@Constants/styles';
import colors from '@Constants/colors';
import {
    type TextInputProps,
    type StyleProp,
    type ViewStyle,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';

interface Props {
    extraContainerStyle?: StyleProp<ViewStyle>,
    setValue: Dispatch<SetStateAction<any>>,
    placeholder?: string,
    icon?: IconNamesType,
    value: any,
}

const AppTextInput: FC<Props & TextInputProps> = ({
    extraContainerStyle,
    placeholder,
    setValue,
    value,
    icon,
    ...props
}) => (
    <View style={[ styles.container, extraContainerStyle ]}>
        {icon && <MaterialCommunityIcons name={icon} color={colors.medium} size={28} />}
        <TextInput
            clearButtonMode='always'
            style={[ styles.input, props.style ]}
            onChangeText={setValue}
            value={value}
            {...props}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray,
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderRadius: 100,
        paddingHorizontal: 10
    },
    input: {
        fontSize: 18,
        color: colors.dark,
        fontFamily: defaultStyles.font.fontFamily,
    }
})

export default AppTextInput