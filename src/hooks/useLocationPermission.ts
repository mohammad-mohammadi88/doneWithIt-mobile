import * as Location from "expo-location";
import { useEffect, useState } from "react";
const useLocationPermission = () => {
    const [canGetLocation, setCanGetLocation] = useState<boolean>(false);

    const getPermission = async () => {
        try {
            const { granted } = await Location.getForegroundPermissionsAsync();
            setCanGetLocation(granted);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getPermission();
    }, []);

    return canGetLocation;
};

export default useLocationPermission;
