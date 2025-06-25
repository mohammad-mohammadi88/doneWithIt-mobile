import { listingChangeValidation } from "@Constants/validations";
import { ListingChangeLogic } from "@Components/FormsLogic";
import type { FormikOnSubmit, ListingChangeInterface } from "@Types/Forms";
import { postListing } from "@/APIs/listings";
import ProgressScreen from "./ProgressScreen";
import { AppForm } from "@Components/form";
import { useState, type FC } from "react";
import { useLocation } from "@/hooks";

const initialValues: ListingChangeInterface = {
    title: "",
    description: "",
    price: "",
    category: {
        selectedLabel: "",
        selectedValue: 0,
        selectedIcon: "apps",
    },
    images: [],
};

const ListingAddScreen: FC = () => {
    const location = useLocation();
    const [progress, setProgress] = useState<number>(0);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleSubmit:FormikOnSubmit = async (value: ListingChangeInterface,{resetForm}) => {
        setModalVisible(true);
        setProgress(0);

        const { ok } = await postListing({
            ...value,
            location,
            categoryId: value.category.selectedValue,
            setProgress,
        });

        if (ok) setProgress(1);
        else {
            alert("Could not save your listing");
            setModalVisible(false);
        };

        resetForm()
    };

    return (
        <>
            <ProgressScreen
                onAnimationFinish={() => setModalVisible(false)}
                visible={modalVisible}
                progress={progress}
            />
            <AppForm
                initialValues={initialValues}
                validationSchema={listingChangeValidation}
                onSubmit={handleSubmit}
            >
                <ListingChangeLogic />
            </AppForm>
        </>
    );
};

export default ListingAddScreen;
