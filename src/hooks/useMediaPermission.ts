import * as ImagePicker from "expo-image-picker";
import { useLayoutEffect, useState } from "react";
import { Alert } from "react-native";

const useMediaPermission = () => {
    const [canSelectImage, setCanSelectImage] = useState<boolean | undefined>(undefined);
    const [sendingRequest, setSendingRequest] = useState<boolean>(true);

    const cameraPermission = async () => {
        const { granted } = await ImagePicker.getMediaLibraryPermissionsAsync();
        if (granted) {
            setCanSelectImage(true);
            setSendingRequest(false);
        }
    };
    useLayoutEffect(() => {
        cameraPermission();
    }, []);

    const askAgain = async () => {
        const { granted } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (granted) {
            setCanSelectImage(true);
            setSendingRequest(false);
        }
    };

    if (!canSelectImage && !sendingRequest) {
        Alert.alert(
            "Sorry",
            "First you should enable the gallery access permission to select image",
            [
                {
                    text: "Enable",
                    onPress: () => askAgain(),
                },
                {
                    text: "No thanks"
                },
            ]
        );
    };
    if(typeof canSelectImage === "boolean") return canSelectImage
    
};

export default useMediaPermission;
