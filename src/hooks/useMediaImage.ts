import { ImagePickerAsset } from "expo-image-picker";
import { useMediaPermission } from ".";
import { selectImage } from "@/APIs";

interface Return{
    canSelectImage: boolean|undefined,
    luanchImage: (() => Promise<{
        assets: ImagePickerAsset | {
            uri: string;
        };
        canceled: boolean;
    }>) | null,

}
const useMediaImage = ():Return => {
    const canSelectImage = useMediaPermission();
    return {
        canSelectImage,
        luanchImage: canSelectImage ? selectImage : null,
    };
};

export default useMediaImage;
