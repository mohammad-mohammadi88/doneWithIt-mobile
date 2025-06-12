import { FlatList, StyleSheet, View } from "react-native";
import colors from "@Constants/colors";
import Card from "@Components/Card";
import { useState, type FC } from "react";

export interface CardInterface {
    id: number;
    title: string;
    image: any;
    price: number;
}
const initialCards: CardInterface[] = [
    {
        id: 1,
        title: "Red jacket for sale",
        price: 100,
        image: require("@Images/jacket.png"),
    },
    {
        id: 2,
        title: "big sofa for sale",
        price: 250,
        image: require("@Images/sofa.png"),
    },
];
const ListingsScreen: FC = () => {
    const [refresh] = useState(false);
    return (
        <View style={styles.container}>
            <FlatList
                data={initialCards}
                renderItem={({ item: { title, price, image, id } }) => (
                    <Card
                        subTitle={"$" + price}
                        title={title}
                        href={{
                            pathname: "/(tabs)/Feed/ListingDetail",
                            params: { title, image, price, id },
                        }}
                        image={image}
                    />
                )}
                refreshing={refresh}
                onRefresh={() => {}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        padding: 20,
        flex: 1,
    },
});

export default ListingsScreen;
