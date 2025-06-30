import { AppFormField, SubmitFormBtn } from "../form"
import type { FC } from 'react';

const RegisterFormLogic: FC = () => (
    <>
        <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            autoFocus
            icon='account-circle'
            name='name'
            placeholder='Username'
            textContentType="name"
        />
        
        <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
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

        <SubmitFormBtn title='Register' />
    </>
)


export default RegisterFormLogic