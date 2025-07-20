import { Alert, StyleSheet, Text, View } from "react-native";
import { PermissionStatus } from "expo-image-picker";
import { useEffect, type FC } from "react";
import { Redirect } from "expo-router";

import type { SelectOptionInterface } from "@Types/globals";
import FormPickerOption from "../form/FormPickerOption";
import { maxImageCount } from "@Constants/defaults";
import { useApi, useMediaPermission } from "@/hooks";
import defaultStyles from "@Constants/styles";
import { categoriesApi } from "@/APIs";
import {
    FormImageInput,
    SubmitFormBtn,
    AppFormPicker,
    AppFormField,
    AppErrorMessage,
} from "../form";

const ListingChangeLogic: FC = () => {
    const status = useMediaPermission();
    const { data, request: loadCategories } = useApi(
        categoriesApi.getCategories
    );
    useEffect(() => {
        loadCategories();
    }, []);

    if (status === PermissionStatus.UNDETERMINED)
        return (
            <View style={[defaultStyles.flexCenter, defaultStyles.fullScreen]}>
                <AppErrorMessage
                    error='You should allow or deny your gallery permission to continue'
                    size={26}
                />
            </View>
        );
    else if (status === PermissionStatus.DENIED) {
        Alert.alert("Permission", "You should allow us to access your gallery");
        return <Redirect href={"/(tabs)/Feed"} />;
    }

    const categories: SelectOptionInterface[] = data
        ? data?.map(
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
          )
        : [];

    return (
        <View style={styles.container}>
            <FormImageInput name='images' maxImageCount={maxImageCount} />

            <AppFormField
                autoFocus
                maxLength={100}
                name='title'
                placeholder='Title'
            />

            <AppFormField
                name='price'
                useRegex={/^(?:\d+|\d+\.|\d+\.+\d|\d+\.+\d\d)?$/}
                placeholder='Price'
                maxLength={7}
                keyboardType='numeric'
                width={110}
                ExtraElement={<Text style={styles.dollorSign}>$</Text>}
            />

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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
    dollorSign: {
        marginLeft: 5,
        fontSize: 20,
    },
});
export default ListingChangeLogic;
