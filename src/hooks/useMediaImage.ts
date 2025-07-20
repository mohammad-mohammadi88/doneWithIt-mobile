import { type ImagePickerAsset, PermissionStatus } from "expo-image-picker";

import useMediaPermission from "./useMediaPermission";
import { selectImage } from "@/utilities";

interface Return{
    permissionStatus: PermissionStatus,
    launchImage: (() => Promise<{
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
        launchImage: permissionStatus === PermissionStatus.GRANTED ? selectImage : null,
    };
};

export default useMediaImage;
