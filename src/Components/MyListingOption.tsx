import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLayoutEffect, useState, type FC } from "react";
import { useRouter } from "expo-router";
import {
    Alert,
    FlatList,
    Modal,
    Pressable,
    StyleSheet,
    View,
} from "react-native";

import { AppPressable, PickerOption } from "./AppComponents";
import ProgressScreen from "@Screens/ProgressScreen";
import { ListItemSeparator } from "./ListItem";
import { listingApi, listingsApi } from "@/APIs";
import { useAuth } from "@/hooks";

interface Props {
    listingUserId: number;
    listingId: number;
}

const MyListingOption: FC<Props> = ({ listingUserId, listingId }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [deleteModalShow, setDeleteModalShow] = useState<boolean>(false);
    const [soldOutModalShow, setSoldOutModalShow] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);

    const router = useRouter();
    const auth = useAuth();
    const isMyListing = auth?.user?.userId === listingUserId;

    useLayoutEffect(() => {
        setShowModal(false);
        setDeleteModalShow(false);
        setSoldOutModalShow(false)
    }, []);

    const handleDelete = async () => {
        setDeleteModalShow(true);

        const { ok } = await listingsApi.deleteListing(listingId, setProgress);

        if (ok) {
            setProgress(1);
        } else {
            alert("Could not delete your listing");
            setDeleteModalShow(false);
            setShowModal(false)
        }
    };

    const handleSoldOut = async () => {
        setSoldOutModalShow(true);

        const { ok,data } = await listingApi.markAsSoldOut(listingId, setProgress);

        if (ok) {
            setProgress(1);
        } else {
            alert(data);
            setSoldOutModalShow(false);
            setShowModal(false)
        }
    };
    const listingOption = [
        {
            id: 1,
            item: {
                label: "Delete Listing",
            },
            onPress: async () => {
                Alert.alert(
                    "Delete",
                    "Are you sure want to delete this listing?",
                    [
                        { text: "Cancel" },
                        {
                            text: "Yes",
                            onPress: handleDelete,
                        },
                    ]
                );
            },
        },
        {
            id: 2,
            item: {
                label: "Edit Listing",
            },
            onPress: () => {
                router.navigate(`/Feed/edit?id=${listingId}`);
            },
        },
        {
            id: 3,
            item: {
                label: "Listing Sold Out",
            },
            onPress: async () => {
                Alert.alert(
                    "Sold Out",
                    "Are you sure want to mark this listing as sold out?",
                    [
                        { text: "Cancel" },
                        {
                            text: "Yes",
                            onPress: handleSoldOut,
                        },
                    ]
                );
            },
        },
    ];
    if (!isMyListing) return null;
    return (
        <View>
            <ProgressScreen
                onAnimationFinish={(isCanceled) => {
                    console.log("first")
                    setProgress(0)
                    setDeleteModalShow(false);
                    setSoldOutModalShow(false);
                    setShowModal(false)
                    if (!isCanceled) router.push("/(tabs)/Feed");
                }}
                visible={deleteModalShow || soldOutModalShow}
                progress={progress}
            />
            <Pressable
                style={styles.container}
                onPress={() => setShowModal(true)}
            >
                <MaterialCommunityIcons
                    color={"white"}
                    name='dots-vertical'
                    style={styles.listingOptions}
                    size={35}
                />
            </Pressable>
            <Modal visible={showModal} animationType='slide'>
                <View style={styles.modal}>
                    <AppPressable onPress={() => setShowModal(false)}>
                        <MaterialCommunityIcons name='close' size={30} />
                    </AppPressable>
                    <View>
                        <FlatList
                            data={listingOption}
                            renderItem={({ item: { item, onPress } }) => (
                                <PickerOption onPress={onPress} item={item} />
                            )}
                            ItemSeparatorComponent={ListItemSeparator}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        right: 10,
        top: 10,
        zIndex: 1,
    },
    modal: {
        padding: 20,
    },
    listingOptions: {
        backgroundColor: "gray",
        borderRadius: 50,
    },
});

export default MyListingOption;
