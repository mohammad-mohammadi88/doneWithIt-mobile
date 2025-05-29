import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props{
    size: number;
    name: any,
    iconColor: string,
    backgroundColor: string;
}

const Icon :FC<Props> = ({iconColor,backgroundColor,name,size}) => {
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
            <MaterialCommunityIcons name={name} size={size / 2} color={iconColor}/>
        </View>
    )
}


export default Icon