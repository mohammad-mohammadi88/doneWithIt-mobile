import { Image, StyleSheet } from "react-native";
import { useState, type FC } from "react";

import { AppErrorMessage, AppForm } from "@Components/form";
import { loginValidation } from "@Constants/validations";
import { LoginFormLogic } from "@Components/FormsLogic";
import type { LoginInterface } from "@Types/Forms";
import { useAuth } from "@/hooks";

const LoginScreen: FC = () => {
    const [loginError, setLoginError] = useState<string>("");
    const auth = useAuth();
    const initialLoginValues: LoginInterface = {
        password: "",
        email: "",
    };

    const handleSubmit = async ({ email, password }: LoginInterface) => {
        setLoginError("");
        const isError = await auth?.logIn({ email, password });
        isError && setLoginError("Invalid email and/or password");
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
