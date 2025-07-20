import apiClient from "@/APIs/client";
import userApi from "@/APIs/user";

describe("userApi", () => {
    it("should call getMyListings with correct arguments", () => {
        const userId = "1";
        userApi.getUser(userId);
        expect(apiClient.get).toHaveBeenCalledWith("user/" + userId);
    });
});
