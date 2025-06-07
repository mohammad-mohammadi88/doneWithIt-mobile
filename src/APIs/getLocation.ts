import  type{ Dispatch, SetStateAction } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";

const getLocation = async (
    setCoords: Dispatch<
        SetStateAction<Location.LocationObjectCoords | undefined>
    >
) => {
    try{ setCoords((await Location.getLastKnownPositionAsync())?.coords) }
    catch(e){ Alert.alert("Location", "can not get your location")}
    
};

export default getLocation;
