import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

import type { UserType } from "@Types/user";

const key = "authToken";

const getToken = async (): Promise<string | null | undefined> => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {
        console.log("error storing token", e);
    }
};

const getUser = async (): Promise<UserType | null> => {
    const userToken = await getToken();
    if(userToken)
        return jwtDecode(userToken);
    
    return null;
};

const removeToken = async () => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.log("error removing token", e);
    }
};

const storeToken = async (token: string) => {
    try {
        await AsyncStorage.setItem(key, token);
    } catch (e) {
        console.log("error removing token", e);
    }
};

export default {
    getToken,
    getUser,
    removeToken,
    storeToken,
};
