import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState, type FC } from "react";

import { listingChangeValidation } from "@Constants/validations";
import { ListingChangeLogic } from "@Components/FormsLogic";
import { AppErrorMessage, AppForm } from "@Components/form";
import type { ListingChangeInterface } from "@Types/Forms";
import { AppLottieView } from "@/Components/AppComponents";
import type { ListingType } from "@Types/listings";
import { useApi, useLocation } from "@/hooks";
import { categoriesApi, listingApi, listingsApi } from "@/APIs";
import { ServerCategories } from "@/types/categories";
import ProgressScreen from "./ProgressScreen";

const ListingEditScreen: FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<
        ServerCategories | undefined
    >(undefined);
    const [progress, setProgress] = useState<number>(0);
    const router = useRouter()
    const location = useLocation();
    const { id }: { id: string } = useLocalSearchParams();
    const listingId = id;

    const { data:listing, request:getListing, error, isLoading } = useApi<ListingType>(
        listingApi.getListing
    );
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
                categories?.find((category) => listing?.categoryId === category.id)
            );
    }, [listing, categories]);

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

        const { ok,data } = await listingsApi.editListing({
            ...value,
            location,
            listingId,
            categoryId: value.category.selectedValue,
            setProgress,
        });

        if (ok && typeof data === "object"){
            setProgress(1);
            router.push("/(tabs)/Feed")
        } else {
            alert("Could not edit your listing\nPlease try again");
            setModalVisible(false);
        }
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

export default ListingEditScreen;
