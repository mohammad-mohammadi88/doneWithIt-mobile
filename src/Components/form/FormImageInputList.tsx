import type { ChangeListingImageType } from '@Types/listings';
import { ImageInputList } from '../AppComponents';
import AppErrorMessage from './AppErrorMessage';
import { useFormikContext } from 'formik';
import type { Href } from 'expo-router';
import type { FC } from 'react';

interface Props {
    name: string,
    redirectUri?: Href,
    maxImageCount?: number
}

const FormImageInput: FC<Props> = ({ name,redirectUri,maxImageCount }) => {
    const { values, setFieldValue, errors } = useFormikContext()
    // @ts-ignore
    const [ value, error ]: [ ChangeListingImageType[], string ] = [ values[ name ], errors[ name ] ];

    const handleRemove = ({uri}: ChangeListingImageType) => setFieldValue(name, value.filter(image => image.uri !== uri))

    const handleAdd = (image: ChangeListingImageType ) => setFieldValue(name, [ ...value, image ])

    return (
        <>
            <ImageInputList
                onRemove={handleRemove}
                maxImageCount={maxImageCount}
                ImageUris={value.map(c=>c.uri)}
                onAdd={handleAdd}
                redirectUri={redirectUri}
            />
            <AppErrorMessage error={error} />
        </>
    )
}


export default FormImageInput