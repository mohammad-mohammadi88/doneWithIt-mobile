import { AppFormField, SubmitFormBtn } from "../form"
import type { FC } from 'react';

const LoginFormLogic: FC = () => (
    <>
        <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus
            icon='email'
            keyboardType="email-address"
            name='email'
            placeholder='Email'
            textContentType="emailAddress"
        />

        <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            name='password'
            placeholder='Password'
            secureTextEntry
            textContentType="password"
        />

        <SubmitFormBtn title='login' />
    </>
)


export default LoginFormLogic