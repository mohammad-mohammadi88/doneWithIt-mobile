import { FlatList, StyleSheet, View, Text } from "react-native";
import { useEffect, useState, type FC } from "react";

import { AppLottieView, AppButton } from "@Components/AppComponents";
import type { ListingType } from "@Types/listings";
import defaultStyles from "@Constants/styles";
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

    useEffect(() => {
        loadListings();
    }, []);

    // @ts-ignore
    const canShowListings = !isLoading && !error && listings?.length > 0;
    return (
        <View style={[styles.container, defaultStyles.flexCenter]}>
            <AppLottieView
                loop
                source={require("@Animations/loading1.json")}
                visible={isLoading && !error}
            />
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
            {canShowListings && (
                <FlatList
                    data={listings}
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
        </View>
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
    },
});

export default ListingsScreen;
