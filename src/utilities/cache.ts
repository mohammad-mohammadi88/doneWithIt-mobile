import AsyncStorage from "@react-native-async-storage/async-storage";

export interface StoreItem {
    value: any;
    timeStamp: number;
}

const prefix: string = "cache";
const expireMinutes: number = 60;

const isExpired = (date: number, expireMins: number = expireMinutes): boolean =>
    (Date.now() - date) / 1000 / 60 > expireMins;

const store = async (key: string, value: any) => {
    try {
        const item: StoreItem = {
            value,
            timeStamp: Date.now(),
        };
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
    } catch (e) {}
};

const get = async (key: string, expireMins?: number) => {
    try {
        const item = await AsyncStorage.getItem(prefix + key);

        if (!item) return null;
        const { timeStamp, value }: StoreItem = JSON.parse(item);

        if (isExpired(timeStamp, expireMins)) {
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }

        return value;
    } catch (e) {}
};

export default {
    store,
    get
};
