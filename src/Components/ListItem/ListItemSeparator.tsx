import { StyleSheet, View } from 'react-native';
import colors from '@Constants/colors';
import type { FC } from 'react';

const ListItemSeparator: FC<{ bgc?: string }> = ({ bgc = colors.lightGray }) => 
    <View style={[ styles.ItemSeparator, { backgroundColor: bgc } ]} />

const styles = StyleSheet.create({
    ItemSeparator: {
        width: "100%",
        height: 1
    }
})

export default ListItemSeparator