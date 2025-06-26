import { Redirect } from 'expo-router';
import type { FC } from 'react';

import { useAuth } from '@/auth/Context';

const Redirector :FC = () => {
    const auth = useAuth();
    return <Redirect href={auth?.user ? "/(tabs)/Feed" : "/welcome"} />
}

export default Redirector