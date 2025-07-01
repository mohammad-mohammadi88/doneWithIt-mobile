import { type ImagePickerAsset, PermissionStatus } from "expo-image-picker";
import { selectImage } from "@/utilities";
import { useMediaPermission } from ".";

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
