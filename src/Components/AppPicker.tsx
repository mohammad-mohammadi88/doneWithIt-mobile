import { useState, type Dispatch, type FC, type SetStateAction } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors, { grayPressAction } from '@Constants/colors';
import type { SelectedOption, SelectOptionInterface } from '@App/(tabs)';
import defaultStyles from '@Constants/styles';
import AppPressable from './AppPressable';
import {
    type StyleProp,
    type ViewStyle,
    StyleSheet,
    FlatList,
    Modal,
    Text,
    View,
} from 'react-native';
import PickerOptions from './PickerOption';

interface Props {
    extraContainerStyle?: StyleProp<ViewStyle>,
    setValue: Dispatch<SetStateAction<SelectedOption>>,
    selectOptions:SelectOptionInterface[]
    placeholder: string,
    value:SelectedOption,
}

const AppPicker: FC<Props> = ({
    extraContainerStyle,
    selectOptions,
    placeholder,
    setValue,
    value
}) => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const handleSelectOption = (selected:SelectedOption) => {
        setValue(selected);
        setIsModalVisible(false)
    }
    return (
        <>
            <View style={styles.container}>
                <AppPressable
                    pressAction={grayPressAction}
                    onPress={() => setIsModalVisible(true)}
                    style={[ styles.picker, extraContainerStyle ]}
                >
                    <MaterialCommunityIcons
                        name="apps"
                        color={colors.medium}
                        size={28}
                    />

                    <Text style={[styles.placeholder,defaultStyles.font]}>{value.selectedValue.length > 0 ? value.selectedLabel : placeholder}</Text>

                    <MaterialCommunityIcons
                        name="chevron-down"
                        color={colors.medium}
                        size={28}
                    />
                </AppPressable>
            </View>
            <Modal visible={isModalVisible} animationType='slide'>
                <View style={styles.modalContainer}>
                    <AppPressable onPress={() => setIsModalVisible(false)}>
                        <MaterialCommunityIcons name='close' size={30} />
                    </AppPressable>
                    <View>
                        <FlatList 
                            data={selectOptions}
                            renderItem={({item}) => <PickerOptions
                                onPress={() => handleSelectOption({
                                    selectedLabel:item.label,
                                    selectedValue:item.value,
                                })} 
                                label={item.label}
                            />}
                        />
                    </View>
                </View>
            </Modal>
        </>
    )
}




const styles = StyleSheet.create({
    container: {overflow:"hidden",borderRadius:100,backgroundColor: colors.lightGray},
    picker: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderRadius: 100,
        paddingHorizontal: 10,
        textTransform: "capitalize",
    },
    placeholder: {
        flex:1,
        paddingHorizontal: 10,
        textTransform: "capitalize",
    },
    modalContainer: {
        padding: 10
    },
    
})

export default AppPicker