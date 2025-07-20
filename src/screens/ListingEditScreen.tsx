import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState, type FC } from "react";

import { listingChangeValidation } from "@Constants/validations";
import { categoriesApi, listingApi, listingsApi } from "@/APIs";
import { ListingChangeLogic } from "@Components/FormsLogic";
import { AppErrorMessage, AppForm } from "@Components/form";
import type { ListingChangeInterface } from "@Types/Forms";
import { AppLottieView } from "@/Components/AppComponents";
import type { ServerCategories } from "@Types/categories";
import type { ListingType } from "@Types/listings";
import ProgressScreen from "./ProgressScreen";
import {useLocation,useApi} from "@/hooks";

const ListingEditScreen: FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<
        ServerCategories | undefined
    >(undefined);
    const [progress, setProgress] = useState<number>(0);
    const router = useRouter();
    const location = useLocation();
    const { id:listingId }: { id: string } = useLocalSearchParams();

    const {
        data: listing,
        request: getListing,
        error,
        isLoading,
    } = useApi<ListingType>(listingApi.getListing);
    const { data: categories, request: getCategories } = useApi<
        ServerCategories[]
    >(categoriesApi.getCategories);

    useEffect(() => {
        getCategories();
        getListing<string>(listingId);
    }, []);

    useEffect(() => {
        if (listing?.categoryId)
            setSelectedCategory(
                categories?.find(
                    (category) => listing?.categoryId === category.id
                )
            );
    }, [listing, categories]);

    if (!location) return null;
    if (isLoading)
        return (
            <AppLottieView
                source={require("@Animations/loading2.json")}
                isCenter
            />
        );

    if (error)
        return (
            <AppErrorMessage error='Unable to get prev product!' size={22} />
        );

    if (!listing || !selectedCategory) return null;

    const { categoryId, price, description, title, images } = listing;
    const initialValues: ListingChangeInterface | undefined = listing && {
        title,
        description,
        price: String(price),
        category: {
            selectedLabel: selectedCategory
                ? selectedCategory.name
                : "Category",
            selectedValue: categoryId,
            selectedIcon: selectedCategory ? selectedCategory.icon : "apps",
        },
        images: images.map(({ url: uri }) => ({
            uri,
            mimeType: "image/jpeg",
        })),
    };
    const handleSubmit = async (value: ListingChangeInterface) => {
        setModalVisible(true);
        setProgress(0);

        const { ok, data }: any = await listingsApi.editListing({
            ...value,
            ...location,
            listingId,
            categoryId: value.category.selectedValue,
            setProgress,
        });

        if (ok) setProgress(1);
        else {
            if (data?.error) {
                if (typeof data.error === "string") alert(data.error);
                else alert(data.error.join("\n"));
            } else alert("Could not update your listing");
            setModalVisible(false);
        }
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

export default ListingEditScreen;
