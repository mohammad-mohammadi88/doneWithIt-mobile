import type { LocationType, UserLocationType } from "./globals";

export type ImageType = Record<"url" | "thumbnailUrl", string>;

export interface ListingType {
    id: number;
    title: string;
    images: ImageType[];
    price: number;
    categoryId: number;
    userId: number;
    location?: LocationType;
    description: string;
}

export type AddListingType = {
    title: string;
    price: string;
    description: string;
    images: ChangeListingImageType[]
    location?: UserLocationType,
    categoryId: number,
    setProgress: (progress: number) => void
}

export type ListingParamsType = Omit<ListingType, "images" | "location"> & {
    location?: string;
    images: string;
};

export interface ChangeListingImageType {
    mimeType?: string;
    uri: string;
}
