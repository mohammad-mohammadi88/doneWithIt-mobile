import type { FC } from "react";

import ListingsScreen from "@/screens/ListingsScreen";
import { myApi } from "@/APIs";

const MyListings: FC = () => (
    <ListingsScreen getListingsApi={myApi.getMyListing} />
);

export default MyListings;
