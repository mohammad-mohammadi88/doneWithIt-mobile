import type { AddListingType, ListingType } from "@Types/listings";
import { nanoid } from "nanoid/non-secure";
import apiClient from "./client";

const endpoint = "listings";
export const getListings = async () =>
    await apiClient.get<ListingType[]>(endpoint);

export const postListing = async ({
    title,
    categoryId,
    price,
    images,
    location,
    description,
    setProgress,
}: AddListingType) => {
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("price", String(price));
    data.append("categoryId", String(categoryId));

    if (location) data.append("location", JSON.stringify(location));

    const imageList: any[] = images.map(({ uri, mimeType }) => ({
        name: nanoid() + ".jpg",
        type: mimeType || "image/jpeg",
        uri,
    }));

    imageList.forEach((image) => {
        data.append("images", image);
    });

    return await apiClient.post(endpoint, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progress) => {
            setProgress(Math.min(0.95,progress.loaded / progress.total))
        },
    });
};
