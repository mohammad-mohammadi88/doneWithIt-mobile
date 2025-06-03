import type { SelectOptionInterface } from '@Types/globals';
import type { StyleProp, ViewStyle } from 'react-native';
import AppErrorMessage from './AppErrorMessage';
import { AppPicker } from '../AppComponents';
import { useFormikContext } from 'formik';
import  type{ FC } from 'react';

interface Props {
    extraContainerStyle?: StyleProp<ViewStyle>,
    selectOptions: SelectOptionInterface[]
    placeholder: string,
    name: string
}
const AppFormPicker: FC<Props> = ({ name, ...props }) => {
    const { errors, values, handleBlur, setFieldValue } = useFormikContext()
    // @ts-ignore
    const [ selectedItem, pickerError ] = [ values[ name ], errors[ name ] ];
    console.log("🚀 ~ pickerError:", pickerError)
    return (
        <>
            <AppPicker
                onBlue={handleBlur}
                setSelectedItem={(e: any) => setFieldValue(name, e)}
                selectedItem={selectedItem}
                {...props}
            />
            <AppErrorMessage error={pickerError?.selectedValue} />
        </>
    )
}

export default AppFormPicker