import { StyleSheet, View } from 'react-native';
import type { FC } from 'react';

import colors from '@Constants/colors';

const ListItemSeparator: FC<{ bgc?: string }> = ({ bgc = colors.lightGray }) => 
    <View style={[ styles.ItemSeparator, { backgroundColor: bgc } ]} />

const styles = StyleSheet.create({
    ItemSeparator: {
        width: "100%",
        height: 1
    }
})

export default ListItemSeparator