import type { FC } from 'react';
import { 
    TouchableNativeFeedback,
    TouchableHighlight,
    StyleSheet,
    ViewStyle,
    Platform,
    Text,
    View,
} from 'react-native';

interface Props { 
    BtnStyle: ViewStyle;
    title: string
}

const BtnContainer: FC<Props> = ({BtnStyle,title}) => {
    const BtnComponent = Platform.OS === "android" ? TouchableNativeFeedback : TouchableHighlight
    return (
        <BtnComponent>
            <View style={[ styles.bottomBtn, BtnStyle ]}>
                <Text style={styles.btnText}>{title}</Text>
            </View>
        </BtnComponent>
    )
}

const styles = StyleSheet.create({
    bottomBtn: {
        width: "100%",
        height: 70,
        justifyContent: "center",
        alignItems: "center"
    },
    btnText: {
        fontSize: 22,
        color: "white",
        fontWeight: 600
    },
})

export default BtnContainer