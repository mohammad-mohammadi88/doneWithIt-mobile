import { type ImagePickerAsset, PermissionStatus } from "expo-image-picker";
import { useMediaPermission } from ".";
import { selectImage } from "@/utilities";

interface Return{
    permissionStatus: PermissionStatus,
    luanchImage: (() => Promise<{
        assets: ImagePickerAsset | {
            uri: string;
            mimeType: string
        };
        canceled: boolean;
    }>) | null
}
const useMediaImage = ():Return => {
    const permissionStatus = useMediaPermission();
    return {
        permissionStatus,
        luanchImage: permissionStatus === PermissionStatus.GRANTED ? selectImage : null,
    };
};

export default useMediaImage;
