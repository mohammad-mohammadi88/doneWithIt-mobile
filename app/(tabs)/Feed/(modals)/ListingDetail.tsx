import ListingDetailsScreen from "@Screens/ListingDetailsScreen";
import { useLocalSearchParams } from "expo-router";
import type { FC } from "react";

const ListingDetail: FC = () => {
    const params: any = useLocalSearchParams();
    return <ListingDetailsScreen listing={params} />;
};

export default ListingDetail;
