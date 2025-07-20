import type { ApiResponse } from "apisauce";
import { jwtDecode } from "jwt-decode";
import { Alert } from "react-native";
import { useContext } from "react";

import authStorage from "@/auth/authStorage";
import type { UserType } from "@Types/user";
import { User } from "@/auth/Context";

const useAuth = () => {
    const res = useContext(User);
    if (!res) return undefined;

    const { dispatch, user } = res;

    const logOut = () => {
        Alert.alert("Log Out", "Are you sure want to log out?", [
            { text: "Cancel" },
            {
                text: "Yes",
                onPress: () => {
                    dispatch(undefined);
                    authStorage.removeToken();
                },
            },
        ]);
    };


    const registerOrLogin = async (callApi: any):Promise<string[]> => {
        const result:ApiResponse<any, any> = await callApi();
        if (!result.ok){
            if(result.data && result.data?.error){
                const error = result.data.error
                return typeof error === "string" ? [error] : error
            }
            return ["An unexpected error happend"]
        };

        // @ts-ignore
        if (typeof result.data === "string") {
            const user: UserType = jwtDecode(result.data);
            dispatch(user);
            await authStorage.storeToken(result.data);
        }
        return [];
    };
    
    return { dispatch, registerOrLogin, logOut, user };
};

export default useAuth;
