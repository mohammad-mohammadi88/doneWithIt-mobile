import { Image, StyleSheet } from "react-native";
import { useState, type FC } from "react";
import { jwtDecode } from "jwt-decode";

import { loginValidation } from "@Constants/validations";
import { LoginFormLogic } from "@Components/FormsLogic";
import type { LoginInterface } from "@Types/Forms";
import { AppErrorMessage, AppForm } from "@Components/form";
import { authApi } from "@/APIs";
import { useAuth } from "@/auth/Context";
import { UserType } from "@/types/user";
import authStorage from "@/auth/authStorage";

const LoginScreen: FC = () => {
    const [loginError, setLoginError] = useState<string>("");
    const auth = useAuth();
    const initialLoginValues: LoginInterface = {
        password: "",
        email: "",
    };

    const handleSubmit = async ({ email, password }: LoginInterface) => {
        setLoginError("");
        const result = await authApi.login(email, password);
        if (!result.ok) {
            return setLoginError("Invalid email and/or password");
        }
        if (typeof result.data === "string") {
            const user: UserType = jwtDecode(result.data);
            if (auth) auth?.dispatch(user);
            await authStorage.storeToken(result.data);
            return;
        }
    };
    return (
        <>
            <Image style={styles.logo} source={require("@Images/icon.png")} />
            <AppForm
                initialValues={initialLoginValues}
                onSubmit={handleSubmit}
                validationSchema={loginValidation}
            >
                <AppErrorMessage size={22} error={loginError} />
                <LoginFormLogic />
            </AppForm>
        </>
    );
};

const styles = StyleSheet.create({
    logo: {
        marginVertical: 40,
        height: 100,
        width: 100,
        alignSelf: "center",
    },
});

export default LoginScreen;
