import { Pressable, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState, type FC } from "react";
import { Image } from "expo-image";

import type { ListingType } from "@Types/listings";
import type { ListingUserInfo } from "@Types/user";
import { MyListingOption } from "@/Components";
import defaultStyles from "@Constants/styles";
import { listingApi, userApi } from "@/APIs";
import ListItem from "@Components/ListItem";
import { capitalize } from "@/utilities";
import colors from "@Constants/colors";
import { useApi } from "@/hooks";
import { AppLottieView } from "@/Components/AppComponents";
import { AppErrorMessage } from "@/Components/form";

const ListingDetailsScreen: FC = () => {
    const { id }: any = useLocalSearchParams();
    const { data: listing, request: getListing } = useApi<ListingType>(
        listingApi.getListing
    );
    const {
        data: user,
        isLoading,
        error,
        request: getUser,
    } = useApi<ListingUserInfo>(userApi.getUser);

    const router = useRouter();
    useEffect(() => {
        getListing(id);
    }, []);

    const [imageSource, setImageSource] = useState<any>();

    useEffect(() => {
        const uri = listing?.images[0].url;
        if (uri) setImageSource({ uri });
        if (listing?.userId) getUser<number>(listing.userId);
    }, [listing]);

    return (
        <>
            {isLoading && (
                <AppLottieView
                    isCenter
                    source={require("@Animations/loading2.json")}
                />
            )}
            {error && <AppErrorMessage error="Could not load this listing"/>}
            {listing && (
                <View>
                    <MyListingOption
                        listingId={id}
                        listingUserId={listing.userId}
                    />
                    <Pressable
                        onPress={() =>
                            imageSource?.uri &&
                            router.navigate(`/Feed/viewImage?id=${id}`)
                        }
                    >
                        <Image
                            style={styles.image}
                            source={imageSource}
                            onError={() =>
                                setImageSource(
                                    require("@Images/notfoundImage.png")
                                )
                            }
                        />
                    </Pressable>
                    <View style={styles.infoContainer}>
                        <Text style={styles.title} numberOfLines={3}>
                            {capitalize(listing.title)}
                        </Text>
                        <Text style={styles.price}>${listing.price}</Text>
                        {user && (
                            <View style={styles.userContainer}>
                                <ListItem
                                    image={require("@Images/user.jpg")}
                                    title={user.name}
                                    subTitle={`${user.listings} Listings`}
                                />
                            </View>
                        )}
                    </View>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 250,
    },
    infoContainer: {
        padding: 20,
    },
    title: {
        fontFamily: defaultStyles.font.fontFamily,
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 10,
    },
    price: {
        color: colors.primary,
        fontFamily: defaultStyles.font.fontFamily,
        fontSize: 18,
        fontWeight: "bold",
    },
    userContainer: {
        marginTop: 40,
        width: "100%",
    },
});

export default ListingDetailsScreen;
