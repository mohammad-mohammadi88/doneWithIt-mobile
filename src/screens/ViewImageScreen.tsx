import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, type FC } from "react";
import { Image } from "expo-image";

import type { ListingType } from "@Types/listings";
import { listingApi } from "@/APIs";
import { useApi } from "@/hooks";

const ViewImageScreen: FC = () => {
    const { id } = useLocalSearchParams<{ id: string }>();

    const { data: listing, request: getListing } = useApi<ListingType>(
        listingApi.getListing
    );

    useEffect(() => {
        getListing(id);
    }, [id]);
    return (
        <View style={styles.container}>
            {listing?.images && (
                <FlatList
                    data={listing.images}
                    renderItem={({ item }) => (
                        <Image
                            contentFit='contain'
                            style={styles.image}
                            source={{ uri: item.url }}
                        />
                    )}
                    keyExtractor={({ url }) => url}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                />
            )}
        </View>
    );
};

const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
    image: {
        zIndex: 8,
        width,
        flex: 1,
    },
});

export default ViewImageScreen;
