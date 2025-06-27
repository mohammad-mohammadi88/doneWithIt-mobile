import { Image, StyleSheet } from "react-native";
import { useState, type FC } from "react";

import { AppErrorMessage, AppForm } from "@Components/form";
import { AppLottieView } from "@Components/AppComponents";
import { loginValidation } from "@Constants/validations";
import { LoginFormLogic } from "@Components/FormsLogic";
import type { LoginInterface } from "@Types/Forms";
import { Overlay } from "@/Components";
import { useAuth } from "@/hooks";
import { authApi } from "@/APIs";

const LoginScreen: FC = () => {
    const [loginError, setLoginError] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const auth = useAuth();
    const initialLoginValues: LoginInterface = {
        password: "",
        email: "",
    };
    const handleSubmit = async ({ email, password }: LoginInterface) => {
        setIsLoading(true);
        setLoginError([]);
        const error = await auth?.registerOrLogin(() =>
            authApi.login(email, password)
        );
        error?.map((e) => setLoginError((c) => [...c, e]));
        setIsLoading(false);
    };
    return (
        <>
            <Image style={styles.logo} source={require("@Images/icon.png")} />
            <AppForm
                initialValues={initialLoginValues}
                onSubmit={handleSubmit}
                validationSchema={loginValidation}
            >
                {loginError &&
                    loginError.map((error) => (
                        <AppErrorMessage key={error} size={22} error={error} />
                    ))}
                <LoginFormLogic />
            </AppForm>
            {isLoading && (
                <Overlay>
                    <AppLottieView visible source={require('@Animations/loading2.json')} />
                </Overlay>
            )}
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
