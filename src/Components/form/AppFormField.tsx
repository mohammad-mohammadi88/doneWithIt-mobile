import { Text, type DimensionValue, type StyleProp, type TextInputProps } from 'react-native';
import { AppTextInput } from '../AppComponents';
import AppErrorMessage from './AppErrorMessage';
import { IconNamesType } from '@Types/globals';
import { useFormikContext } from 'formik';
import type { FC } from 'react';

interface Props {
    name: string,
    icon?: IconNamesType,
    width?: DimensionValue,
    style?: any,
    ExtraElement?: React.JSX.ElementType
}

const AppFormField: FC<TextInputProps & Props> = ({
    name,
    width = "100%",
    style,
    ExtraElement,
    ...props
}) => {
    const { handleChange, setFieldTouched, errors, values } = useFormikContext();
    // @ts-ignore
    const [ fieldError, value ] = [ errors[ name ], values[ name ] ]
    return (
        <>
            <AppTextInput
                setValue={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                extraContainerStyle={[ { width }, style ]}
                value={value}
                {...props}
            />
            {ExtraElement && <ExtraElement />}
            <AppErrorMessage error={fieldError} />
        </>
    )
}

export default AppFormField