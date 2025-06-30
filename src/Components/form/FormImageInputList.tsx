import { useFormikContext } from 'formik';
import type { FC } from 'react';

import type { ChangeListingImageType } from '@Types/listings';
import { ImageInputList } from '../AppComponents';
import AppErrorMessage from './AppErrorMessage';

interface Props {
    name: string,
    maxImageCount?: number
}

const FormImageInput: FC<Props> = ({ name,maxImageCount }) => {
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
            />
            <AppErrorMessage error={error} />
        </>
    )
}


export default FormImageInput