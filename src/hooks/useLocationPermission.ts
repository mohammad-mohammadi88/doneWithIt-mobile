import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocationPermission = () => {
    const [canGetLocation, setCanGetLocation] = useState<boolean>(false);

    const getPermission = async () => {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync();
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
