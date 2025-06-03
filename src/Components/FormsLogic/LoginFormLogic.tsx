import { AppFormField, SubmitFormBtn } from "../form"
import type { FC } from 'react';

const LoginFormLogic: FC = () => (
    <>
        <AppFormField
            name='email'
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Email'
            icon='email'
        />

        <AppFormField
            name='password'
            textContentType="password"
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
            icon='lock'
        />

        <SubmitFormBtn title='login' />
    </>
)


export default LoginFormLogic