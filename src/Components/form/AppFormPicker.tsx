import type { DimensionValue, StyleProp, ViewStyle } from "react-native";
import { useFormikContext } from "formik";
import type { FC } from "react";

import type { SelectOptionInterface } from "@Types/globals";
import AppErrorMessage from "./AppErrorMessage";
import { AppPicker } from "../AppComponents";

interface Props {
    PickerOptionComponents?: React.JSX.ElementType;
    extraContainerStyle?: StyleProp<ViewStyle>;
    selectOptions: SelectOptionInterface[];
    numberOfColumns?: number;
    width?: DimensionValue;
    placeholder: string;
    name: string;
}
const AppFormPicker: FC<Props> = ({
    extraContainerStyle,
    numberOfColumns,
    width = "100%",
    name,
    ...props
}) => {
    const { errors, values, handleBlur, setFieldValue } = useFormikContext();
    // @ts-ignore
    const [selectedItem, pickerError] = [values[name], errors[name]];

    return (
        <>
            <AppPicker
                onBlue={handleBlur}
                numberOfColumns={numberOfColumns}
                setSelectedItem={(e: any) => setFieldValue(name, e)}
                selectedItem={selectedItem}
                extraContainerStyle={[extraContainerStyle, { width }]}
                {...props}
            />
            <AppErrorMessage error={pickerError?.selectedLabel} />
        </>
    );
};

export default AppFormPicker;
