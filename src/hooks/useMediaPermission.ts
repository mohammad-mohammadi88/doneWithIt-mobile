import { useLayoutEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

const useMediaPermission = (): ImagePicker.PermissionStatus => {
    const [permissionStatus, setPermissionStatus] =
        useState<ImagePicker.PermissionStatus>(
            ImagePicker.PermissionStatus.UNDETERMINED
        );

    const cameraPermission = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        setPermissionStatus(status);
    };

    useLayoutEffect(() => {
        cameraPermission();
    }, []);

    return permissionStatus;
};

export default useMediaPermission;
