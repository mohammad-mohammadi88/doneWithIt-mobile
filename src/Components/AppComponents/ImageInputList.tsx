import { ScrollView, StyleSheet, View } from "react-native";
import { useRef, type FC } from "react";

import type { ChangeListingImageType } from "@Types/listings";
import ImageInput from "./ImageInput";

interface Props {
    ImageUris: string[];
    onRemove: (image: ChangeListingImageType) => void;
    onAdd: (image: ChangeListingImageType) => void;
    maxImageCount?: number;
}

const ImageInputList: FC<Props> = ({
    ImageUris = [],
    maxImageCount,
    onAdd,
    onRemove
}) => {
    const scrollView = useRef<ScrollView>(null);
    const imageCondition =
        (maxImageCount && maxImageCount > ImageUris.length) || !maxImageCount;
    return (
        <View>
            <ScrollView
                ref={scrollView}
                horizontal
                onContentSizeChange={() => scrollView.current?.scrollToEnd()}
            >
                <View style={styles.container}>
                    {ImageUris.map((uri) => (
                        <View key={uri} style={styles.image}>
                            <ImageInput
                                onChangeImage={onRemove}
                                imageUri={uri}
                            />
                        </View>
                    ))}
                    {imageCondition && (
                        <ImageInput onChangeImage={onAdd} />
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 5,
        paddingBottom: 5,
    },
    image: {
        marginRight: 10,
    },
});

export default ImageInputList;
