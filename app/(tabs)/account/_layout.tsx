import { Stack } from 'expo-router';
import type { FC } from 'react';

const Layout :FC = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{
                headerShown: false
            }} />
            <Stack.Screen name='myMessages' options={{
                title:"My Messages",
                headerShown: true,
                contentStyle:{ backgroundColor: "transparent" }
            }} />
        </Stack>
    )
}

export default Layout