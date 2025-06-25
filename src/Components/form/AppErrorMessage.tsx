import { StyleSheet, Text } from 'react-native';
import defaultStyles from '@Constants/styles';
import type { FC } from 'react';

interface Props{ error: string,size?:number }

const AppErrorMessage :FC<Props> = ({error,size=16}) =>
    error && <Text style={[styles.errorMessage,{fontSize:size}]}>{error}</Text>

const styles = StyleSheet.create({
    errorMessage: {
        color: "red",
        fontFamily: defaultStyles.font.fontFamily,
        paddingHorizontal: 10,        
    }
})

export default AppErrorMessage