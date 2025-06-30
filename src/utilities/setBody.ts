import { AddListingType } from "@/types/listings";
import { nanoid } from "nanoid/non-secure";

const setBody = ({
    categoryId,
    description,
    images,
    price,
    title,
    location,
}: Omit<AddListingType, "setProgress">) => {
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
    return data
};
export default setBody