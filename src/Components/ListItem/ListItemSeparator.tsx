import { StyleSheet, View } from 'react-native';
import type { FC } from 'react';
import colors from '@/constants/colors';

const ListItemSeparator :FC = () => <View style={styles.ItemSeparator} />

const styles = StyleSheet.create({
    ItemSeparator: {
        width: "100%",
        height: 1,
        backgroundColor: colors.gray
    }
})

export default ListItemSeparator