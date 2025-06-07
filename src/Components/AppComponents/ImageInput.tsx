import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Alert, Image, StyleSheet } from "react-native";
import { Redirect, type Href } from "expo-router";
import defaultStyles from "@Constants/styles";
import AppPressable from "./AppPressable";
import { useMediaImage } from "@/hooks";
import colors from "@Constants/colors";
import type { FC } from "react";

interface Props {
    imageUri?: string;
    onChangeImage: (uri: string) => void;
    redirectUri?: Href;
}
const ImageInput: FC<Props> = ({
    imageUri = "",
    onChangeImage,
    redirectUri = "/",
}) => {
    const { canSelectImage, luanchImage } = useMediaImage();
    if (typeof canSelectImage === "boolean") {
        if (!canSelectImage) {
            Alert.alert(
                "Permission",
                "You should allow us to access your gallery"
            );
            return <Redirect href={redirectUri}/>;
        } else {
            const handleSelectImage = async () => {
                try {
                    // @ts-ignore
                    const { assets, canceled } = await luanchImage();
                    if (!canceled) onChangeImage(assets.uri);
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
                                  text: "Yes",
                                  onPress: () => onChangeImage(imageUri),
                              },
                              {
                                  text: "No",
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
        }
    } else {
        return null
    }
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
