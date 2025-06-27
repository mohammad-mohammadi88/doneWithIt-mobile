import { ListingType } from "@/types/listings";
import apiClient from "./client";

const endpoint = "listing/";
const getListing = (id:number) => apiClient.get<ListingType>(endpoint+id);

export default {
    getListing,
};
