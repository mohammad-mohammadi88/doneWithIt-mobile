import type { SelectOptionInterface } from "@Types/globals";
import FormPickerOption from "../form/FormPickerOption";
import { StyleSheet, Text, View } from "react-native";
import { maxImageCount } from "@Constants/defaults";
import { getCategories } from "@/APIs/categories";
import { useEffect, type FC } from "react";
import { useApi } from "@/hooks";
import {
    FormImageInput,
    SubmitFormBtn,
    AppFormPicker,
    AppFormField,
} from "../form";

const ListingChangeLogic: FC = () => {
    const { data, request: loadCategories } = useApi(getCategories);
    useEffect(() => {
        loadCategories();
    }, []);
    const categories: SelectOptionInterface[] = data ? data?.map(
        ({
            backgroundColor,
            color: iconColor,
            icon,
            id: value,
            name: label,
        }) => ({
            value,
            item: {
                label,
                icon: {
                    backgroundColor,
                    icon,
                    iconColor,
                },
            },
        })
    ) : [];


    return (
        <>
            <FormImageInput name='images' maxImageCount={maxImageCount}/>

            <AppFormField name='title' placeholder='Title' maxLength={100} />
            <View style={style.priceContainer}>
                <AppFormField
                    name='price'
                    useRegex={/^(?:\d+|\d+\.\d+)$/}
                    placeholder='Price'
                    maxLength={7}
                    keyboardType='numeric'
                    width={110}
                    ExtraElement={() => <Text style={style.dollorSign}>$</Text>}
                />
            </View>

            <AppFormPicker
                PickerOptionComponents={FormPickerOption}
                selectOptions={categories}
                numberOfColumns={3}
                placeholder='category'
                name='category'
                width={"60%"}
            />

            <AppFormField
                name='description'
                placeholder='Description'
                multiline
                maxLength={300}
                numberOfLines={30}
            />

            <SubmitFormBtn title='post' />
        </>
    );
};

const style = StyleSheet.create({
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    dollorSign: {
        marginLeft: 5,
        fontSize: 20,
    },
});
export default ListingChangeLogic;
