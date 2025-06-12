import { listingChangeValidation } from "@Constants/validations";
import { ListingChangeLogic } from "@Components/FormsLogic";
import type { ListingChangeInterface } from "@Types/Forms";
import { AppForm } from "@Components/form";
import { useLocation } from "@/hooks";
import type { FC } from "react";

const initialValues: ListingChangeInterface = {
    title: "",
    description: "",
    price: "",
    category: {
        selectedLabel: "",
        selectedValue: "",
        selectedIcon: "apps",
    },
    images: [],
};

const ListingAddScreen: FC = () => {
    const location = useLocation();
    return (
        <AppForm
            initialValues={initialValues}
            validationSchema={listingChangeValidation}
            onSubmit={() => console.log(location)}
        >
            <ListingChangeLogic />
        </AppForm>
    );
};

export default ListingAddScreen;
