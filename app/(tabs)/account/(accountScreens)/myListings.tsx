import type { FC } from "react";

import ListingsScreen from "@Screens/ListingsScreen";
import { myApi } from "@/APIs";

const MyListings: FC = () => (
    <ListingsScreen getListingsApi={myApi.getMyListings} />
);

export default MyListings;
