import apiClient from "@/APIs/client"
import myApi from "@/APIs/my"


describe("myApi", () => {
    it("should call getMyListings with correct arguments", () => {
        myApi.getMyListings();
        expect(apiClient.get).toHaveBeenCalledWith("my");
    });
});
