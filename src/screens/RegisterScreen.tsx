import { useState, type FC } from "react";

import { registerValidation } from "@Constants/validations";
import { AppErrorMessage, AppForm } from "@Components/form";
import { RegisterFormLogic } from "@Components/FormsLogic";
import { AppLottieView } from "@Components/AppComponents";
import type { RegisterInterface } from "@Types/Forms";
import { Overlay } from "@/Components";
import { usersApi } from "@/APIs";
import { useAuth } from "@/hooks";

const RegisterScreen: FC = () => {
    const [registerError, setRegisterError] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const auth = useAuth();
    const initialValues: RegisterInterface = {
        name: "",
        password: "",
        email: "",
    };

    const handleSubmit = async (data: RegisterInterface) => {
        setRegisterError([]);
        setIsLoading(true);
        const error = await auth?.registerOrLogin(() =>
            usersApi.registerUser(data)
        );
        error?.map((e) => setRegisterError((c) => [...c, e]));
        setIsLoading(false)
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
            {isLoading && (
                <Overlay>
                    <AppLottieView
                        visible
                        source={require("@Animations/loading2.json")}
                    />
                </Overlay>
            )}
        </>
    );
};

export default RegisterScreen;
