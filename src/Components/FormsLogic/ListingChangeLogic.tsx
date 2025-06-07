import { AppFormField, AppFormPicker, FormImageInput, SubmitFormBtn } from '../form';
import type { SelectOptionInterface } from '@Types/globals';
import FormPickerOption from '../form/FormPickerOption';
import { StyleSheet, Text, View } from 'react-native';
import type { FC } from 'react';

const ListingChangeLogic: FC = () => {
    const categories: SelectOptionInterface[] = [
        {
            item: {
                label: "furniture",
                icon: {
                    backgroundColor: "red",
                    icon: "lamp",
                }
            },
            value: "1",
        },
        {
            item: {
                label: "chair",
                icon: {
                    backgroundColor: "green",
                    icon: "chair-rolling",
                }
            },
            value: "2",
        },
        {
            item: {
                label: "camera",
                icon: {
                    backgroundColor: "rgb(0,89,255)",
                    icon: "camera",
                }
            },
            value: "3",
        },
        {
            item: {
                label: "books",
                icon: {
                    backgroundColor: "purple",
                    icon: "book"
                }
            },
            value: "4"
        },
        {
            item: {
                label: "sports",
                icon: {
                    backgroundColor: "skyblue",
                    icon: "basketball"
                }
            },
            value: "5"
        },
        {
            item: {
                label: "clothing",
                icon: {
                    backgroundColor: "cadetblue",
                    icon: "shoe-heel"
                }
            },
            value: "6"
        },
        {
            item: {
                label: "car",
                icon: {
                    backgroundColor: "orange",
                    icon: "car"
                }
            },
            value: "7"
        },
        {
            item: {
                label: "movies & music",
                icon: {
                    backgroundColor: "rgb(0, 169, 169)",
                    icon: "headphones"
                }
            },
            value: "8"
        },
        {
            item: {
                label: "other",
                icon: {
                    backgroundColor: "rgb(97, 111, 141)",
                    icon: "folder-outline"
                }
            },
            value: "9"
        },
    ]
    
    return (
        <>
            <FormImageInput name='images'/>

            <AppFormField
                name='title'
                placeholder='Title'
                maxLength={100}
            />
            <View style={style.priceContainer}>

                <AppFormField
                    name='price'
                    placeholder='Price'
                    maxLength={7}
                    keyboardType="numeric"
                    width={110}
                    ExtraElement={() => <Text style={style.dollorSign}>$</Text>}
                />
                
            </View>

            <AppFormPicker
                PickerOptionComponents={FormPickerOption}
                selectOptions={categories}
                numberOfColumns={3}
                placeholder='category'
                name="category"
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
    )
}

const style = StyleSheet.create({
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    dollorSign: {
        marginLeft: 5,
        fontSize: 20,
    }
})
export default ListingChangeLogic