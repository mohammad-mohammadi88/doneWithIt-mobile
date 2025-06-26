import { jwtDecode } from "jwt-decode";

import {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";

import { UserType } from "@Types/user";
import authStorage from "./authStorage";

interface UserContext {
    user: UserType | undefined;
    dispatch: Dispatch<SetStateAction<UserType | undefined>>;
}
export const User = createContext<UserContext | undefined>(undefined);

export const useAuth = () => useContext(User);

interface Props {
    children: ReactNode;
    isAppReady: boolean;
    setIsAppReady: Dispatch<SetStateAction<boolean>>;
}
const AuthContext: FC<Props> = ({ children,isAppReady,setIsAppReady }) => {
    const [user, dispatch] = useState<UserType | undefined>(undefined);

    useEffect(() => {
        setDefaultUser();
    }, []);
    const setDefaultUser = async () => {
        const userToken = await authStorage.getToken();
        console.log("🚀 ~ setDefaultUser ~ userToken:", userToken)
        if (userToken) {
            const defaultUser: UserType = jwtDecode(userToken);
            if (defaultUser) dispatch(defaultUser);
        }
        setIsAppReady(true);
    };
    return (
        isAppReady && (
            <User.Provider value={{ user, dispatch }}>{children}</User.Provider>
        )
    );
};

export default AuthContext;
