import { registerValidation } from '@Constants/validations';
import { RegisterFormLogic } from '@Components/FormsLogic';
import type { RegisterInterface } from '@Types/Forms';
import { AppForm } from '@Components/form';
import type { FC } from 'react';


const RegisterScreen: FC = () => {
    const initialValues: RegisterInterface = {
        username: "",
        password: "",
        email: ""
    }
    return (
        <AppForm
            validationSchema={registerValidation}
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
        >
            <RegisterFormLogic />
        </AppForm>
    )
}

export default RegisterScreen