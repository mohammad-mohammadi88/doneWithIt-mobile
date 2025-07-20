import { useFormikContext } from "formik";
import type { FC } from "react";
import {
    StyleSheet,
    View,
    type DimensionValue,
    type TextInputProps,
} from "react-native";

import { AppTextInput } from "../AppComponents";
import AppErrorMessage from "./AppErrorMessage";
import { IconNamesType } from "@Types/globals";

interface Props {
    name: string;
    icon?: IconNamesType;
    width?: DimensionValue;
    style?: any;
    ExtraElement?: React.ReactNode;
    useRegex?: RegExp;
}

const AppFormField: FC<TextInputProps & Props> = ({
    name,
    width = "100%",
    style,
    ExtraElement,
    useRegex,
    ...props
}) => {
    const { setFieldValue, setFieldTouched, errors, values } =
        useFormikContext();
    // @ts-ignore
    const [fieldError, value] = [errors[name], values[name]];
    const handleChange = (text: string) => {
        if (!useRegex) return setFieldValue(name, text);
        const regex = new RegExp(useRegex);
        if (regex.test(text)) return setFieldValue(name, text);
    };
    return (
        <>
            <View style={styles.container}>
                <AppTextInput
                    setValue={handleChange}
                    onBlur={() => setFieldTouched(name)}
                    extraContainerStyle={[{ width }, style]}
                    value={value}
                    {...props}
                />
                {ExtraElement}
            </View>

            <AppErrorMessage error={fieldError} />
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    }
});
export default AppFormField;
