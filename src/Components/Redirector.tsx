import {
    memo,
    useLayoutEffect,
    useState,
    type FC,
} from "react";
import { Redirect } from "expo-router";

import { useAuth } from "@/hooks";


const Redirector: FC = () => {
    const auth = useAuth();
    const [initUri, setInitUri] = useState<"/(tabs)/Feed" | "/welcome" | "">(
        ""
    );

    useLayoutEffect(() => {
        if (auth?.user) return setInitUri("/(tabs)/Feed");
        setInitUri("/welcome");
    }, [auth?.user]);
    return initUri && <Redirect href={initUri} />;
};

export default memo(Redirector);
