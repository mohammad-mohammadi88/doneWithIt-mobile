import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { FC } from 'react';
import {
    type TextInputProps,
    type StyleProp,
    type ViewStyle,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';

import type { IconNamesType } from '@Types/globals';
import defaultStyles from '@Constants/styles';
import colors from '@Constants/colors';

interface Props {
    extraContainerStyle?: StyleProp<ViewStyle>,
    setValue: (text:string) => void,
    placeholder?: string,
    icon?: IconNamesType,
}

const AppTextInput: FC<Props & TextInputProps> = ({
    extraContainerStyle,
    setValue,
    icon,
    style,
    ...props
}) => (
    <View style={[ styles.container, extraContainerStyle ]}>
        {icon && <MaterialCommunityIcons name={icon} color={colors.medium} size={25} />}
        <TextInput
            clearButtonMode='always'
            onChangeText={setValue}
            style={[ styles.input, style ]}
            {...props}
        />
    </View>
)


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 2,
        marginVertical: 10,
        
    },
    input: {
        fontSize: 18,
        flex: 1,
        color: colors.dark,
        fontFamily: defaultStyles.font.fontFamily,
        marginLeft: 5
    }
})

export default AppTextInput