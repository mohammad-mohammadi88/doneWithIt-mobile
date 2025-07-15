import type { Dispatch, SetStateAction } from "react";
import * as Location from "expo-location";

import type { UserLocationType } from "@Types/globals";

const getLocation = async (
    setCoords: Dispatch<SetStateAction<UserLocationType>>,
    setIslocationReady: Dispatch<SetStateAction<boolean>>
) => {
    const handleLocation = async () => {
    try {
            const coords = (await Location.getLastKnownPositionAsync())?.coords;
            if (coords && coords.latitude && coords.longitude) {
                const { latitude, longitude } = coords;
                setCoords({ latitude, longitude })
                return setIslocationReady(true);
            }
        } catch (e) {return setIslocationReady(true)}
    };
    handleLocation()
};

export default getLocation;
