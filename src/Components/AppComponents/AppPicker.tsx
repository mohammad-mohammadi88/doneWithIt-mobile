import { useState, type Dispatch, type FC, type SetStateAction } from 'react';
import type { SelectedOption, SelectOptionInterface } from '@Types/globals';
import colors, { grayPressAction } from '@Constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ListItemSeparator } from '../ListItem';
import { AppPressable, PickerOption } from ".";
import defaultStyles from '@Constants/styles';
import {
    type StyleProp,
    type ViewStyle,
    StyleSheet,
    FlatList,
    Modal,
    Text,
    View,
} from 'react-native';

interface Props {
    setSelectedItem: Dispatch<SetStateAction<SelectedOption>> | any,
    extraContainerStyle?: StyleProp<ViewStyle>,
    selectedItem: SelectedOption | undefined,
    selectOptions: SelectOptionInterface[],
    placeholder: string,
    onBlue?: any,
}

const AppPicker: FC<Props> = ({
    extraContainerStyle,
    setSelectedItem,
    selectOptions,
    selectedItem,
    placeholder,
    onBlue
}) => {
    const [ isModalVisible, setIsModalVisible ] = useState<boolean>(false);
    const handleSelectOption = (selected: SelectedOption) => {
        setSelectedItem(selected);
        setIsModalVisible(false)
    }
    const isItemSelected = selectedItem && selectedItem?.selectedValue?.length > 0
    const placeholderColor = {
        color: isItemSelected ? colors.dark : colors.medium
    }
    return (
        <>
            <View style={styles.container}>
                <AppPressable
                    onBlur={onBlue}
                    pressAction={grayPressAction}
                    onPress={() => setIsModalVisible(true)}
                    style={[ styles.picker, extraContainerStyle ]}
                >
                    <MaterialCommunityIcons
                        name="apps"
                        color={colors.medium}
                        size={28}
                    />
                    <Text style={[ styles.placeholder, defaultStyles.font, placeholderColor ]}>
                        {isItemSelected ? selectedItem.selectedLabel : placeholder}
                    </Text>

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
                            renderItem={({ item }) => <PickerOption
                                onPress={() => handleSelectOption({
                                    selectedLabel: item.label,
                                    selectedValue: item.value,
                                })}
                                label={item.label}
                            />}
                            ItemSeparatorComponent={() => <ListItemSeparator bgc={colors.lightGray} />}
                        />
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        borderRadius: 100,
        backgroundColor: colors.lightGray,
        marginVertical: 10
    },
    picker: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderRadius: 100,
        paddingHorizontal: 10,
        textTransform: "capitalize",
    },
    placeholder: {
        flex: 1,
        paddingHorizontal: 10,
        textTransform: "capitalize",
    },
    modalContainer: { padding: 10 }
})

export default AppPicker