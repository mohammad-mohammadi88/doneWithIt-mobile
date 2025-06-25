import type { UserLocationType } from "@Types/globals";
import { useEffect, useState } from "react";
import { useLocationPermission } from ".";
import { getLocation } from "@/utilities";

const useLocation = (): UserLocationType => {
    const [coords, setCoords] = useState<UserLocationType>(undefined);
    const granted = useLocationPermission();
    useEffect(() => {
        if (granted) getLocation(setCoords);
    }, [granted]);

    return (
        coords && {
            latitude: coords.latitude,
            longitude: coords.longitude,
        }
    );
};

export default useLocation;
