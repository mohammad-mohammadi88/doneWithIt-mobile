// mocking
jest.unmock("@/APIs/client");

import apiClient from "@/APIs/client";
import authStorage from "@/auth/authStorage";
import { act, waitFor } from "@testing-library/react-native";

describe("apiClient", () => {
    const testUrl = "/test";
    const testToken = "myToken";

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should attach x-auth-token if token exists", async () => {
        (authStorage.getToken as jest.Mock).mockResolvedValue(testToken);

        const spy = jest.spyOn(apiClient.axiosInstance, "request");

        await apiClient.get(testUrl);

        const request = spy.mock.calls[0][0];

        // @ts-ignore
        expect(request?.url).toContain(testUrl);

        // @ts-ignore
        const authToken: string = request?.headers?.["x-auth-token"];
        expect(authToken).toBe("myToken");
    });
});
