import { StyleSheet, Text } from 'react-native';
import defaultStyles from '@Constants/styles';
import type { FC } from 'react';

interface Props{ error: string }

const AppErrorMessage :FC<Props> = ({error}) =>
    error && <Text style={styles.errorMessage}>{error}</Text>

const styles = StyleSheet.create({
    errorMessage: {
        color: "red",
        fontFamily: defaultStyles.font.fontFamily,
        fontSize:16,
        paddingHorizontal: 10
    }
})

export default AppErrorMessage