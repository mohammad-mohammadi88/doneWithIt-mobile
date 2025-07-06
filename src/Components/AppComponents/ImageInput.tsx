import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Alert, Image, StyleSheet } from "react-native";
import { PermissionStatus } from "expo-image-picker";
import type { FC } from "react";

import type { ChangeListingImageType } from "@Types/listings";
import defaultStyles from "@Constants/styles";
import AppPressable from "./AppPressable";
import { useMediaImage } from "@/hooks";
import colors from "@Constants/colors";

interface Props {
    imageUri?: string;
    onChangeImage: (image: ChangeListingImageType) => void;
}
const ImageInput: FC<Props> = ({ imageUri = "", onChangeImage }) => {
    const { permissionStatus, luanchImage } = useMediaImage();
    if (permissionStatus !== PermissionStatus.GRANTED) return null;

    const handleSelectImage = async () => {
        try {
            if (typeof luanchImage === "function") {
                const {
                    assets: { uri, mimeType },
                    canceled,
                } = await luanchImage();
                if (!canceled) onChangeImage({ uri, mimeType });
            }
        } catch (error) {
            console.log("error while selecting the image", error);
        }
    };
    const handlePress = () => {
        !imageUri
            ? handleSelectImage()
            : Alert.alert(
                  "Delete",
                  "Are You sure you want to delete this image?",
                  [
                      {
                          text: "No",
                      },
                      {
                          text: "Yes",
                          onPress: () => onChangeImage({ uri: imageUri }),
                      },
                  ]
              );
    };
    return (
        <AppPressable
            onPress={handlePress}
            style={[styles.container, defaultStyles.flexCenter]}
        >
            {!!imageUri ? (
                <Image
                    source={{ uri: imageUri }}
                    style={defaultStyles.fullScreen}
                />
            ) : (
                <MaterialCommunityIcons
                    name='camera'
                    size={35}
                    color={colors.medium}
                />
            )}
        </AppPressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 10,
        overflow: "hidden",
        width: 100,
        height: 100,
    },
});

export default ImageInput;
