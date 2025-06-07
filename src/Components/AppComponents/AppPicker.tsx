import { ComponentType, useState, type Dispatch, type FC, type SetStateAction } from 'react';
import type { SelectedOption, SelectOptionInterface } from '@Types/globals';
import colors, { grayPressAction } from '@Constants/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
    ItemSeparatorComponent?: ComponentType,
    PickerOptionComponents?: React.JSX.ElementType,
    extraContainerStyle?: StyleProp<ViewStyle>,
    selectedItem: SelectedOption | undefined,
    selectOptions: SelectOptionInterface[],
    numberOfColumns?: number;
    placeholder: string,
    onBlue?: any,
}

const AppPicker: FC<Props> = ({
    PickerOptionComponents = PickerOption,
    numberOfColumns = 1,
    extraContainerStyle,
    ItemSeparatorComponent = undefined,
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
            <View style={[ styles.container, extraContainerStyle ]}>
                <AppPressable
                    onBlur={onBlue}
                    pressAction={grayPressAction}
                    onPress={() => setIsModalVisible(true)}
                    style={styles.picker}
                >
                    <MaterialCommunityIcons
                        name={selectedItem?.selectedIcon}
                        color={colors.medium}
                        size={28}
                    />
                    <Text numberOfLines={2} style={[ styles.placeholder, defaultStyles.font, placeholderColor ]}>
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
                            numColumns={numberOfColumns}
                            renderItem={({ item: { value, item } }) =>
                                <PickerOptionComponents
                                    onPress={() => handleSelectOption({
                                        selectedIcon: item?.icon?.icon || "apps",
                                        selectedLabel: item.label,
                                        selectedValue: value,
                                    })}
                                    item={item}
                                />
                            }
                            ItemSeparatorComponent={ItemSeparatorComponent}
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