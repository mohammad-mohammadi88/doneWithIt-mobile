// mocking
jest.unmock("@/utilities")

import cache, { StoreItem } from "@/utilities/cache";
import AsyncStorage from "@react-native-async-storage/async-storage";

describe("cache tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    const prefix = "cache";
    it("should store data and timeStamp", async () => {
        const key = "/key";
        const value: any = { name: "string" };
        await cache.store(key, value);
        // check params
        expect(AsyncStorage.setItem).toHaveBeenCalledWith(
            prefix + key,
            expect.any(String)
        );

        // check second param content
        const secondParam = (AsyncStorage.setItem as jest.Mock).mock
            .calls[0][1];
        const parsed: StoreItem = JSON.parse(secondParam);

        expect(parsed).toHaveProperty("value", value);
        expect(parsed).toHaveProperty("timeStamp");
        expect(typeof parsed.timeStamp).toBe("number");
    });
    it("should get stored value", async () => {
        const sampleResult = {
            value: { name: "name" },
            timeStamp: Date.now(),
        };
        (AsyncStorage.getItem as jest.Mock).mockImplementation(() =>
            JSON.stringify(sampleResult)
        );

        const key = "/key";
        const result = await cache.get(key);

        expect(AsyncStorage.getItem).toHaveBeenCalledWith(prefix + key);
        expect(result).toStrictEqual(sampleResult.value);
    });
    it("should remove item when cache is expired", async () => {
        const sampleResult = {
            value: { name: "name" },
            // to show past
            timeStamp: 154,
        };
        (AsyncStorage.getItem as jest.Mock).mockImplementation(() =>
            JSON.stringify(sampleResult)
        );

        const key = "/key";
        const result = await cache.get(key);

        expect(AsyncStorage.removeItem).toHaveBeenCalledWith(prefix+key)
        expect(result).toBeNull();
    });
});
