import { useEffect, useState } from "react"
import * as Location from "expo-location"
import {useLocationPermission} from ".";
import { getLocation } from "@/APIs";

const useLocation = (): Location.LocationObjectCoords | undefined => {
    const [coords, setCoords] = useState<Location.LocationObjectCoords | undefined>(undefined);
    const granted = useLocationPermission()
    useEffect(() => {
        if(granted) getLocation(setCoords)
    },[granted])
    
    return coords;
}

export default useLocation