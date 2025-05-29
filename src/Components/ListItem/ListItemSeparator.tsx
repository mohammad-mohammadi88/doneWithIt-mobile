import { StyleSheet, View } from 'react-native';
import type { FC } from 'react';

const ListItemSeparator :FC = () => <View style={styles.ItemSeparator} />

const styles = StyleSheet.create({
    ItemSeparator: {
        width: "100%",
        height: 1,
        backgroundColor: "gray"
    }
})

export default ListItemSeparator