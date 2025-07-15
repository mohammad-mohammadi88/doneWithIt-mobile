import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocationPermission = () => {
    const [canGetLocation, setCanGetLocation] = useState<boolean>(false);

    const getPermission = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            setCanGetLocation(status === Location.PermissionStatus.GRANTED);
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
