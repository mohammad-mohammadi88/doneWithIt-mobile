import {
    useLayoutEffect,
    type Dispatch,
    type FC,
    type SetStateAction,
} from "react";
import { StyleSheet } from "react-native";

import type { ListingType } from "@Types/listings";
import { AppTextInput } from "./AppComponents";
import { categoriesApi } from "@/APIs";
import { useApi } from "@/hooks";

interface Props {
    listings: ListingType[];
    setFilteredListings: Dispatch<SetStateAction<ListingType[] | undefined>>;
}

const ListingFilter: FC<Props> = ({ listings, setFilteredListings }) => {
    const { data: categories, request: getCategories } = useApi(
        categoriesApi.getCategories
    );
    useLayoutEffect(() => {
        setFilteredListings(listings);
        getCategories();
    }, [listings]);

    const handleChange = (text: string) => {
        const filterText = text.toLowerCase().trim();
        if (filterText.length === 0) return setFilteredListings(listings);
        setFilteredListings(
            listings.filter((listing) => {
                const categoryId = listing.categoryId;
                const title = listing.title.toLowerCase();

                let isCategoryMatches = false;
                if (categories) {
                    const category = categories.find(
                        (e) => e.id === categoryId
                    );
                    if (category)
                        isCategoryMatches = category?.name
                            .toLowerCase()
                            .includes(filterText);
                }
                return title.includes(filterText) || isCategoryMatches;
            })
        );
    };
    return (
        <AppTextInput
            extraContainerStyle={styles.container}
            icon='magnify'
            placeholder='Search with name or category'
            setValue={handleChange}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
});

export default ListingFilter;
