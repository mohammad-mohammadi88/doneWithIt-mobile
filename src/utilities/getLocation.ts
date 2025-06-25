import type { UserLocationType } from "@Types/globals";
import type { Dispatch, SetStateAction } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";

const getLocation = async (
    setCoords: Dispatch<SetStateAction<UserLocationType>>
) => {
    try {
        const coords = (await Location.getLastKnownPositionAsync())?.coords;
        if (coords && coords?.latitude && coords.longitude) {
            const { latitude, longitude } = coords;
            return setCoords({ latitude, longitude });
        }
        throw new Error("error");
    } catch (e) {
        Alert.alert("Location", "can not get your location");
    }
};

export default getLocation;
