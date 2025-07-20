import apiClient from "@/APIs/client"
import listingApi from "@/APIs/listing"

describe("listing", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    const prefix = "listing/";
    it("should call get listing with correct url", () => {
        const id = "1";
        listingApi.getListing(id);

        expect(apiClient.get).toHaveBeenCalledWith(prefix + id);
    });
    it("should call markAsSoldOut with correct params", () => {
        const id = "1";
        const setProgress = jest.fn();
        listingApi.markAsSoldOut(id, setProgress);
        expect(apiClient.patch).toHaveBeenCalledWith(
            prefix + id,
            {},
            expect.anything()
        );

        expect(setProgress).toHaveBeenCalledWith(0.5);
    });
});
