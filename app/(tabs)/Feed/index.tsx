import type { FC } from "react";

import ListingsScreen from "@Screens/ListingsScreen";
import { listingsApi } from "@/APIs";

const Index: FC = () => (
    <ListingsScreen getListingsApi={listingsApi.getListings} />
);

export default Index;
