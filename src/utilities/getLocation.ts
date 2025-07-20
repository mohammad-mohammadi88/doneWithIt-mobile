import type { Dispatch, SetStateAction } from "react";
import * as Location from "expo-location";

import type { UserLocationType } from "@Types/globals";

const getLocation = async (
    setCoords: Dispatch<SetStateAction<UserLocationType>>,
    setIslocationReady: Dispatch<SetStateAction<boolean>>
) => {
    try {
        const coords = (await Location.getCurrentPositionAsync())?.coords;
        if (coords && coords.latitude && coords.longitude) {
            const { latitude, longitude } = coords;
            setCoords({ latitude, longitude });
        }
    } catch (e) {}
    return setIslocationReady(true);
};

export default getLocation;
