import { useState, type FC } from "react";
import { useRouter } from "expo-router";

import type { FormikOnSubmit, ListingChangeInterface } from "@Types/Forms";
import { listingChangeValidation } from "@Constants/validations";
import { ListingChangeLogic } from "@Components/FormsLogic";
import ProgressScreen from "./ProgressScreen";
import { AppForm } from "@Components/form";
import { useLocation } from "@/hooks";
import { listingsApi } from "@/APIs";

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
    const router = useRouter();
    const [progress, setProgress] = useState<number>(0);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    if (!location) return null;

    const handleSubmit: FormikOnSubmit = async (
        value: ListingChangeInterface,
        { resetForm }
    ) => {
        setModalVisible(true);
        setProgress(0);

        const { ok, data }: any = await listingsApi.postListing({
            ...value,
            ...location,
            categoryId: value.category.selectedValue,
            setProgress,
        });

        if (ok) setProgress(1);
        else {
            if (data?.error) {
                if (typeof data.error === "string") alert(data.error);
                else alert(data.error.join("\n"));
            } else alert("Could not save your listing");
            setModalVisible(false);
        }

        resetForm();
    };

    return (
        <>
            <ProgressScreen
                onAnimationFinish={() => {
                    setModalVisible(false);
                    router.push("/(tabs)/Feed");
                }}
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
