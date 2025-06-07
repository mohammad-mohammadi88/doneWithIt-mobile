import { ImageInputList } from '../AppComponents';
import AppErrorMessage from './AppErrorMessage';
import { useFormikContext } from 'formik';
import type { Href } from 'expo-router';
import type { FC } from 'react';

interface Props {
    name: string,
    redirectUri?: Href
}

const FormImageInput: FC<Props> = ({ name,redirectUri }) => {
    const { values, setFieldValue, errors } = useFormikContext()
    // @ts-ignore
    const [ value, error ]: [ string[], string ] = [ values[ name ], errors[ name ] ];

    const handleRemove = (uri: string) => setFieldValue(name, value.filter(imageUri => imageUri !== uri))

    const handleAdd = (uri: string) => setFieldValue(name, [ ...value, uri ])

    return (
        <>
            <ImageInputList
                onRemove={handleRemove}
                ImageUris={value}
                onAdd={handleAdd}
                redirectUri={redirectUri}
            />
            <AppErrorMessage error={error} />
        </>
    )
}


export default FormImageInput