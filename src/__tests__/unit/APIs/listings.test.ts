import apiClient from "@/APIs/client";
import listingsApi from "@/APIs/listings";

import { setBody } from "@/utilities";

describe("Listings Api", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    const prefix = "listings/";
    const sampleData = {
        title: "title",
        description: "description",
        price: 50,
        categoryId: 1,
        images: [],
        latitude: 52,
        longitude: 12.54,
    };
    const outputData = setBody(sampleData);
    const listingId = "1";
    it("should call getListings with correct url", () => {
        listingsApi.getListings();
        expect(apiClient.get).toHaveBeenCalledWith(prefix);
    });
    it("should call postListing with correct params", () => {
        const setProgress = jest.fn();
        const info = { ...sampleData, setProgress };
        listingsApi.postListing(info);
        expect(apiClient.post).toHaveBeenCalledWith(
            prefix,
            outputData,
            expect.anything()
        );
        expect(setProgress).toHaveBeenCalledWith(0.5);
    });
    it("should call editListing with correct params", () => {
        const setProgress = jest.fn();
        const info = {
            ...sampleData,
            setProgress,
            listingId,
        };
        listingsApi.editListing(info);
        expect(apiClient.put).toHaveBeenCalledWith(
            prefix + listingId,
            outputData,
            expect.anything()
        );
        expect(setProgress).toHaveBeenCalledWith(0.5);
    });
    it("should call deleteListing with correct url", () => {
        const setProgress = jest.fn();
        listingsApi.deleteListing(listingId, setProgress);
        expect(apiClient.delete).toHaveBeenCalledWith(
            prefix + listingId,
            undefined,
            expect.anything()
        );
        expect(setProgress).toHaveBeenCalledWith(0.5);
    });
});
