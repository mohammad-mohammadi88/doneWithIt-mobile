import { useState, type FC } from "react";

import { registerValidation } from "@Constants/validations";
import { AppErrorMessage, AppForm } from "@Components/form";
import { RegisterFormLogic } from "@Components/FormsLogic";
import { AppLottieView } from "@Components/AppComponents";
import type { RegisterInterface } from "@Types/Forms";
import { Overlay } from "@/Components";
import { useAuth } from "@/hooks";
import { authApi } from "@/APIs";

const RegisterScreen: FC = () => {
    const [registerError, setRegisterError] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const auth = useAuth();
    const initialValues: RegisterInterface = {
        name: "",
        password: "",
        email: "",
    };

    const handleSubmit = async (data: RegisterInterface) => {
        setRegisterError([]);
        setIsLoading(true);
        const error = await auth?.registerOrLogin(() => authApi.register(data));
        error?.map((e) => setRegisterError((c) => [...c, e]));
        setIsLoading(false);
    };
    return (
        <>
            <AppForm
                validationSchema={registerValidation}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {registerError &&
                    registerError.map((error) => (
                        <AppErrorMessage key={error} size={22} error={error} />
                    ))}
                <RegisterFormLogic />
            </AppForm>
            <Overlay visible={isLoading}>
                <AppLottieView
                    visible
                    source={require("@Animations/loading2.json")}
                />
            </Overlay>
        </>
    );
};

export default RegisterScreen;
