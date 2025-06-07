import type { IconNamesType } from '@Types/globals';
import { grayPressAction } from '@Constants/colors';
import { StyleSheet, Text } from 'react-native';
import { AppPressable } from '../AppComponents';
import defaultStyles from '@Constants/styles';
import type { FC } from 'react';
import Icon from '../Icon';

interface Props{
    onPress: (e:any) => void,
    item: {
        label: string,
        icon: {
            backgroundColor:string,
            icon: IconNamesType,
            iconColor: string,
        }
    },
}

const FormPickerOption :FC<Props> = ({onPress,item}) => {
    return (
        <AppPressable style={styles.container} pressAction={grayPressAction} onPress={onPress}>
            <Icon size={80} {...item.icon}/>
            <Text style={[styles.label,defaultStyles.font]}>{item.label}</Text>
        </AppPressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "33.33333%",
        alignItems: "center",
        marginBottom: 20
    },
    label: {
        marginTop: 10,
        textAlign:"center",
        textTransform:"capitalize"
    }
})
export default FormPickerOption