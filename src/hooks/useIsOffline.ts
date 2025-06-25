import { useNetInfo } from "@react-native-community/netinfo";

const useIsOffline = ():boolean => {
    const { type, isInternetReachable } = useNetInfo();
    return type !== "unknown" && isInternetReachable === false;
}

export default useIsOffline