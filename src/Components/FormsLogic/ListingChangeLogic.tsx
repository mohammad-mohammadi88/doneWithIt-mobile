import type { FC } from 'react';
import { AppFormField, AppFormPicker, SubmitFormBtn } from '../form';

const ListingChangeLogic: FC = () => {
    const categories = [
        { label: "Furniture", value: "1" },
        { label: "Clothing", value: "2" },
        { label: "kitcken", value: "3" },
    ]
    return (
        <>
            <AppFormField
                name='title'
                placeholder='Title'
                maxLength={100}
            />

            <AppFormField
                name='price'
                placeholder='Price'
                maxLength={7}
                keyboardType="numeric"
            />

            <AppFormPicker
                name="category"
                placeholder='category'
                selectOptions={categories}
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

export default ListingChangeLogic