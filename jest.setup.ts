// mocks

jest.mock("@react-native-async-storage/async-storage", () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
}));

jest.mock("expo-constants", () => ({
    __esModule: true,
    default: {
        statusBarHeight: 40,
    },
}));

jest.mock("expo-location", () => ({
    getCurrentPositionAsync: jest.fn(),
}));

jest.mock("expo-image", () => ({
    Image: jest.fn(),
}));

jest.mock("expo-image-picker", () => ({
    launchImageLibraryAsync: jest.fn(),
    PermissionStatus: {
        UNDETERMINED: "undetermined",
        DENIED: "denied",
        GRANTED: "granted",
    },
}));

jest.mock("expo-router", () => ({
    useLocalSearchParams: jest.fn().mockImplementation(() => ({ id: "1" })),
    Redirect: jest.fn(),
    useRouter: jest.fn().mockImplementation(() => ({
        push: jest.fn(),
        navigate: jest.fn(),
    })),
}));

jest.mock("@expo/vector-icons", () => ({
    MaterialIcons: jest.fn(),
    MaterialCommunityIcons: jest.fn(),
}));

jest.mock("@/APIs/client", () => ({
    get: jest.fn(),
    patch: jest.fn((_, __, a: any) =>
        a?.onUploadProgress({ loaded: 50, total: 100 })
    ),
    post: jest.fn((_, __, a: any) =>
        a?.onUploadProgress({ loaded: 50, total: 100 })
    ),
    delete: jest.fn((_, __, a: any) =>
        a?.onUploadProgress({ loaded: 50, total: 100 })
    ),
    put: jest.fn((_, __, a: any) =>
        a?.onUploadProgress({ loaded: 50, total: 100 })
    ),
}));

jest.mock("@/APIs", () => ({
    authApi: {
        login: jest.fn(),
        register: jest.fn(),
    },
    categoriesApi: {
        getCategories: jest.fn(),
    },
    listingApi: {
        getListing: jest.fn(),
        markAsSoldOut: jest.fn(),
    },
    listingsApi: {
        deleteListing: jest.fn(),
        editListing: jest.fn(),
        getListings: jest.fn(),
        postListing: jest.fn(),
    },
    messagesApi: {
        deleteMessage: jest.fn(),
        getMessages: jest.fn(),
        getMessageWithId: jest.fn(),
        sendMessage: jest.fn(),
    },
    myApi: {
        getMyListings: jest.fn(),
    },
    userApi: {
        getUser: jest.fn(),
    },
}));

jest.mock("@/auth/authStorage", () => ({
    getToken: jest.fn(),
}));

jest.mock("@/hooks", () => ({
    useIsOffline: jest.fn().mockImplementation(() => false),
    useAuth: jest.fn().mockImplementation(() => ({
        user: {
            id: 1,
            name: "admin",
            email: "email@gmail.com",
        },
    })),
    useMediaPermission: jest.fn(),
    useMediaImage: jest.fn(),
    useApi: jest.fn(),
}));

import "@testing-library/jest-native/extend-expect";import { Image } from "react-native";

