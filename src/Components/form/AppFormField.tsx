import type { TextInputProps } from 'react-native';
import { AppTextInput } from '../AppComponents';
import AppErrorMessage from './AppErrorMessage';
import { IconNamesType } from '@Types/globals';
import { useFormikContext } from 'formik';
import type { FC } from 'react';

interface Props { name: string, icon?: IconNamesType }

const AppFormField: FC<Props & TextInputProps> = ({ name, ...props }) => {
    const { handleChange, setFieldTouched, errors } = useFormikContext();
    // @ts-ignore
    const fieldError = errors[ name ]
    return (
        <>
            <AppTextInput
                setValue={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...props}
            />
            <AppErrorMessage error={fieldError} />
        </>
    )
}

export default AppFormField