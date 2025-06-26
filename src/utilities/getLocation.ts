import type { Dispatch, SetStateAction } from "react";
import * as Location from "expo-location";

import type { UserLocationType } from "@Types/globals";

const getLocation = async (
    setCoords: Dispatch<SetStateAction<UserLocationType>>
) => {
    try {
        async () => {
            const coords = (await Location.getLastKnownPositionAsync())?.coords;

            if (coords && coords.latitude && coords.longitude) {
                console.log("location");
                const { latitude, longitude } = coords;
                return setCoords({ latitude, longitude });
            }
        };
    } catch (e) {}
};

export default getLocation;
