import type { ListingType } from "@Types/listings";
import apiClient from "./client";

const endpoint = "my";
const getMyListing = () => apiClient.get<ListingType[]>(endpoint);

export default {
    getMyListing,
};
