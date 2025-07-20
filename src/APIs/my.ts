import type { ListingType } from "@Types/listings";
import apiClient from "./client";

const endpoint = "my";
const getMyListings = () => apiClient.get<ListingType[]>(endpoint);

export default {
    getMyListings,
};
