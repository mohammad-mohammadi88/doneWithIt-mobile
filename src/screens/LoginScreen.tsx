import { loginValidation } from '@Constants/validations';
import { LoginFormLogic } from '@Components/FormsLogic';
import type { LoginInterface } from '@Types/Forms';
import { Image, StyleSheet } from 'react-native';
import { AppForm } from '@Components/form';
import type { FC } from 'react';

const LoginScreen: FC = () => {
    const initialLoginValues: LoginInterface = {
        password: "",
        email: ""
    }
    const handleSubmit = (values: LoginInterface) => {
        console.log(values)
    }
    return (
        <>
            <Image style={styles.logo} source={require("@Images/icon.png")} />
            <AppForm
                initialValues={initialLoginValues}
                onSubmit={handleSubmit}
                validationSchema={loginValidation}
            >
                <LoginFormLogic />
            </AppForm>

        </>
    )
}

const styles = StyleSheet.create({
    logo: {
        marginVertical: 40,
        height: 100,
        width: 100,
        alignSelf: "center",
    }
})

export default LoginScreen