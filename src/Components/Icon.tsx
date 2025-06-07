import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { IconNamesType } from '@Types/globals';
import { StyleSheet, View } from 'react-native';
import type { FC } from 'react';

interface Props {
    backgroundColor: string;
    icon: IconNamesType,
    iconColor?: string,
    size: number;
}

const Icon: FC<Props> = ({ iconColor = "white", backgroundColor, icon, size }) => {
    const styles = StyleSheet.create({
        iconContainer: {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center",
        }
    })
    return (
        <View style={styles.iconContainer}>
            <MaterialCommunityIcons name={icon} size={size / 2} color={iconColor} />
        </View>
    )
}


export default Icon