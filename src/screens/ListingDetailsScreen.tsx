import { useEffect, useLayoutEffect, useState, type FC } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";

import { LocationMap, MyListingOption, SendMessage } from "@/Components";
import { AppLottieView } from "@Components/AppComponents";
import type { ListItemProps } from "@Types/globals";
import { AppErrorMessage } from "@Components/form";
import type { ListingType } from "@Types/listings";
import type { ListingUserInfo } from "@Types/user";
import defaultStyles from "@Constants/styles";
import { listingApi, userApi } from "@/APIs";
import ListItem from "@Components/ListItem";
import { useAuth, useApi } from "@/hooks";
import { capitalize } from "@/utilities";
import colors from "@Constants/colors";

const ListingDetailsScreen: FC = () => {
    const [showSendMessage, setShowSendMessage] = useState<boolean>(false);
    const [imageSource, setImageSource] = useState<any>();
    const { id }: any = useLocalSearchParams();
    const router = useRouter();
    const auth = useAuth();

    const { data: listing, request: getListing } = useApi<ListingType>(
        listingApi.getListing
    );
    const {
        data: user,
        isLoading,
        error,
        request: getUser,
    } = useApi<ListingUserInfo>(userApi.getUser);

    useLayoutEffect(() => {
        getListing(id);
    }, [id]);

    useEffect(() => {
        const uri = listing?.images[0].url;
        if (uri) setImageSource({ uri });
        if (listing?.userId) getUser<number>(listing.userId);
    }, [listing]);

    if (isLoading)
        return (
            <AppLottieView
                isCenter
                source={require("@Animations/loading2.json")}
            />
        );
    if (error) return <AppErrorMessage error='Could not load this listing' />;
    if (!listing) return null;

    const isMyListing = auth?.user?.userId === listing.userId;
    const canSendMessage = showSendMessage && !isMyListing;

    const userListItemProps: ListItemProps | undefined = user && {
        image: require("@Images/user.jpg"),
        title: user.name,
        subTitle: `${user.listings} Listings`,
    };
    if (userListItemProps && !isMyListing)
        userListItemProps.onPress = () => setShowSendMessage((c) => !c);

    const isLocation = listing.latitude && listing.longitude;
    return (
        <ScrollView style={styles.container}>
            <MyListingOption isMyListing={isMyListing} listingId={id} />
            <Pressable
                onPress={() =>
                    imageSource?.uri &&
                    router.navigate({
                        pathname: "/Feed/viewImage/[id]",
                        params: { id },
                    })
                }
            >
                <Image
                    style={styles.image}
                    source={imageSource}
                    onError={() =>
                        setImageSource(require("@Images/notfoundImage.png"))
                    }
                />
            </Pressable>
            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={3}>
                    {capitalize(listing.title)}
                </Text>
                <Text style={styles.price}>${listing.price}</Text>
                {listing.description && (
                    <Text style={styles.description}>
                        {listing.description}
                    </Text>
                )}
                {userListItemProps && (
                    <View style={styles.userContainer}>
                        <ListItem {...userListItemProps} />
                    </View>
                )}
            </View>
            <SendMessage
                listingId={listing.id}
                visible={canSendMessage}
                setVisible={setShowSendMessage}
            />
            {isLocation ? (
                <LocationMap
                    latitude={listing.latitude}
                    longitude={listing.longitude}
                />
            ) : (
                <View style={[defaultStyles.flexCenter, { marginTop: 30 }]}>
                    <AppErrorMessage
                        error="We don't have listing's location"
                        size={24}
                    />
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        marginTop: 10,
    },
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
        marginTop: 30,
        width: "100%",
    },
});

export default ListingDetailsScreen;
