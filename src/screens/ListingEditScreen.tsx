import { listingChangeValidation } from "@Constants/validations";
import { ListingChangeLogic } from "@Components/FormsLogic";
import type { ListingChangeInterface } from "@Types/Forms";
import { AppForm } from "@Components/form";
import type { FC } from "react";
import { useLocation } from "@/hooks";

const initialValues: ListingChangeInterface = {
    title: "Red jacket",
    description: "Red jacket for sale",
    price: "100",
    category: {
        selectedLabel: "Furniture",
        selectedValue: 1,
        selectedIcon: "lamp",
    },
    images: [
        {
            uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FSell%2Beverything%2Byou%2Bare%2Bdone%2Bwith-a501989b-5144-4a69-af6f-60f1d7afb51a/ImagePicker/f0df25d4-03a4-4783-9b73-542058b35ff3.jpeg",
            mimeType: "image/jpeg"
        },
    ],
};
const ListingEditScreen: FC = () => {
    const location = useLocation();
    return (
        <AppForm
            initialValues={initialValues}
            validationSchema={listingChangeValidation}
            onSubmit={(values) => console.log(location)}
        >
            <ListingChangeLogic />
        </AppForm>
    );
};

export default ListingEditScreen;
