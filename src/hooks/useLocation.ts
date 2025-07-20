import { useEffect, useState } from "react";

import useLocationPermission from "./useLocationPermission";
import type { UserLocationType } from "@Types/globals";
import { getLocation } from "@/utilities";

const useLocation = (): UserLocationType | undefined => {
    const [{ latitude, longitude }, setCoords] = useState<UserLocationType>({
        latitude: undefined,
        longitude: undefined,
    });
    const [islocationReady, setIslocationReady] = useState<boolean>(false);
    const granted = useLocationPermission();
    useEffect(() => {
        if (granted) getLocation(setCoords, setIslocationReady);
    }, [granted]);

    if (islocationReady)
        return {
            latitude,
            longitude,
        };
};

export default useLocation;
