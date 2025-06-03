import { listingChangeValidation } from '@Constants/validations';
import { ListingChangeLogic } from '@Components/FormsLogic';
import type { ListingChangeInterface } from '@Types/Forms';
import { AppForm } from '@Components/form';
import type { FC } from 'react';

const initialValues: ListingChangeInterface = {
    title: "Red jacket",
    description: "Red jacket for sale",
    price: "100",
    category: {
        selectedLabel: "Furniture",
        selectedValue: "1",
    }
}
const ListingEditScreen: FC = () => (
    <AppForm
        initialValues={initialValues}
        validationSchema={listingChangeValidation}
        onSubmit={(values => console.log(values))}
    >
        <ListingChangeLogic />
    </AppForm>
)


export default ListingEditScreen