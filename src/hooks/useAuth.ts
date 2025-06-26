import { jwtDecode } from "jwt-decode";
import { Alert } from "react-native";
import { useContext } from "react";

import type { LoginInterface } from "@Types/Forms";
import authStorage from "@/auth/authStorage";
import type { UserType } from "@Types/user";
import { User } from "@/auth/Context";
import { authApi } from "@/APIs";

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

    const logIn = async ({
        email,
        password,
    }: LoginInterface): Promise<boolean> => {
        const result = await authApi.login(email, password);
        if (!result.ok) return true;

        if (typeof result.data === "string") {
            const user: UserType = jwtDecode(result.data);
            dispatch(user);
            await authStorage.storeToken(result.data);
        }
        return false;
    };

    return { dispatch, logIn, logOut, user };
};

export default useAuth;
