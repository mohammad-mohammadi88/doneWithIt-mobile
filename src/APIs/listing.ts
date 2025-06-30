import type { ListingType } from "@Types/listings";
import apiClient from "./client";

const endpoint = "listing/";

const getListing = (id: number) => apiClient.get<ListingType>(endpoint + id);

const markAsSoldOut = (
    id: number,
    setProgress: (progress:number) => void
) => apiClient.patch(endpoint + id, null, {
    onUploadProgress: (progress) => {
        setProgress(Math.min(0.95, progress.loaded / progress.total));
    },
});

export default {
    getListing,
    markAsSoldOut,
};
