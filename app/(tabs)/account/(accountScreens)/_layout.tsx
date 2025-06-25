import { Stack } from 'expo-router';
import type { FC } from 'react';

import { LayoutWithHeader } from '@/Components';

const Layout :FC = () => {
    return (
        <Stack  layout={LayoutWithHeader}>
            <Stack.Screen name='myMessages' options={{
                title:"My Messages",
                headerShown: true,
                statusBarHidden:true,
                contentStyle:{ backgroundColor: "white" }
            }} />
        </Stack>
    )
}

export default Layout