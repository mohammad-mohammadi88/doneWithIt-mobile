import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import colors from '@Constants/colors';
import type { FC } from 'react';

interface Props {
    backgroundColor?: string,
    width?: number
}
const ListItemDeleteAction: FC<Props> = ({ backgroundColor = colors.secondary, width = 50 }) => (
    <View style={[ styles.container, { backgroundColor, width } ]}>
        <MaterialCommunityIcons name='trash-can' size={35} color={"#fff"} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default ListItemDeleteAction