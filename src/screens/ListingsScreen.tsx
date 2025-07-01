import { FlatList, StyleSheet, View, Text } from "react-native";
import { useEffect, useState, type FC } from "react";

import { AppLottieView, AppButton } from "@Components/AppComponents";
import type { ListingType } from "@Types/listings";
import defaultStyles from "@Constants/styles";
import { ListingFilter } from "@/Components";
import colors from "@Constants/colors";
import { ApiResponse } from "apisauce";
import Card from "@Components/Card";
import { useApi } from "@/hooks";

interface Props {
    getListingsApi: () => Promise<ApiResponse<ListingType[], ListingType[]>>;
}
const ListingsScreen: FC<Props> = ({ getListingsApi }) => {
    const [refresh] = useState<boolean>(false);
    const {
        request: loadListings,
        data: listings,
        isLoading,
        error,
    } = useApi<ListingType[]>(getListingsApi);
    const [filteredListings, setFilteredListings] = useState<
        ListingType[] | undefined
    >(listings);

    useEffect(() => {
        loadListings();
    }, []);

    const noFilteredListing =
        !filteredListings?.length && !isLoading && !error ? true : false;
    const canShowListings =
        listings?.length && filteredListings?.length && !isLoading && !error
            ? true
            : false;
    return (
        <>
            {listings?.length && (
                <ListingFilter
                    listings={listings}
                    setFilteredListings={setFilteredListings}
                />
            )}
            <View style={[styles.container, defaultStyles.flexCenter]}>
                <AppLottieView
                    loop
                    source={require("@Animations/loading1.json")}
                    visible={isLoading && !error}
                />

                {canShowListings && (
                    <FlatList
                        style={defaultStyles.fullScreen}
                        data={filteredListings}
                        renderItem={({
                            item: { title, price, images, isSold, id },
                        }) => (
                            <Card
                                href={`/Feed/listingDetail?id=${id}`}
                                imageURL={images[0]?.url}
                                isSold={isSold}
                                subTitle={"$" + price}
                                title={title}
                            />
                        )}
                        refreshing={refresh}
                        onRefresh={loadListings}
                    />
                )}
                {error && !isLoading && (
                    <>
                        <Text style={styles.errorMessage}>
                            Couldn't receive the listings.
                        </Text>
                        <AppButton title='Retry' onPress={loadListings} />
                    </>
                )}
                {!isLoading && !error && listings?.length === 0 && (
                    <>
                        <Text style={styles.noListingNotice}>
                            No Listings Available
                        </Text>
                        <AppButton title='Retry' onPress={loadListings} />
                    </>
                )}
                {noFilteredListing && (
                    <Text style={styles.noListingNotice}>
                        There is no listing with this name or category
                    </Text>
                )}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        padding: 20,
        flex: 1,
    },
    errorMessage: {
        fontSize: 22,
        marginBottom: 10,
    },
    noListingNotice: {
        fontFamily: defaultStyles.font.fontFamily,
        fontSize: 28,
        fontWeight: 500,
        color: colors.secondary,
        textAlign: "center"
    },
});

export default ListingsScreen;
