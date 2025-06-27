import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, type FC } from "react";
import { Image } from "expo-image";

import type { ListingType } from "@Types/listings";
import { listingApi } from "@/APIs";
import { useApi } from "@/hooks";

const ViewImageScreen: FC = () => {
    const params: { id: string } = useLocalSearchParams();
    const id = parseInt(params?.id);
    const { data: listing, request: getListing } = useApi<ListingType>(
        listingApi.getListing
    );

    useEffect(() => {
        getListing(id);
    }, []);
    return (
        <View style={styles.container}>
            {listing?.images && (
                <FlatList
                    data={listing.images}
                    renderItem={({ item }) => (
                        <Image
                            contentFit='contain'
                            source={{ uri: item.url }}
                            style={styles.image}
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

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
    image: {
        zIndex: 8,
        width,
    },
});

export default ViewImageScreen;
