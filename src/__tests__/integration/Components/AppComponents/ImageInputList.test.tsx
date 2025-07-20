import { act, fireEvent, render, waitFor } from "@testing-library/react-native";
import { PermissionStatus } from "expo-image-picker";
import { Alert } from "react-native";

import { ImageInputList } from "@Components/AppComponents";
import { maxImageCount } from "@Constants/defaults";
import { useMediaImage } from "@/hooks";

const onAdd = jest.fn();
const onRemove = jest.fn();
const sampleUri = "file://imageuri.jpg";
const assets = {
    uri: sampleUri,
    mimeType: "image/jpeg",
};
const launchImage = jest.fn().mockImplementation(() => ({
    assets,
    canceled: false,
}));

describe("ImageInputList tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should add image", async () => {
        // arrange
        (useMediaImage as jest.Mock).mockImplementation(() => ({
            permissionStatus: PermissionStatus.GRANTED,
            launchImage,
        }));
        const { getByLabelText } = render(
            <ImageInputList ImageUris={[]} onRemove={onRemove} onAdd={onAdd} />
        );

        // act
        await act(async () => {
            fireEvent.press(getByLabelText("imageInputContainer"));
        });

        // assert
        await waitFor(() => {
            expect(onAdd).toHaveBeenCalledWith({
                mimeType: "image/jpeg",
                uri: "file://imageuri.jpg",
            });
        });
    });
    it("should remove image", async () => {
        // arrange
        (useMediaImage as jest.Mock).mockImplementation(() => ({
            permissionStatus: PermissionStatus.GRANTED,
            launchImage,
        }));
        const { getByLabelText } = render(
            <ImageInputList
                ImageUris={[sampleUri]}
                onRemove={onRemove}
                onAdd={onAdd}
            />
        );
        const alertSpy = jest.spyOn(Alert, "alert");

        // act
        await act(async () => {
            fireEvent.press(getByLabelText("selectedImage"));
            alertSpy.mock.calls[0][2]?.[1].onPress?.();
        });

        // assert
        await waitFor(() => {
            expect(onRemove).toHaveBeenCalledWith({ uri: sampleUri });
        });
    });
    it("should only select three images", async () => {
        // arrange
        (useMediaImage as jest.Mock).mockImplementation(() => ({
            permissionStatus: PermissionStatus.GRANTED,
            launchImage,
        }));
        let imageUris = [];
        for (let i = 0; i < maxImageCount; i++) imageUris.push(sampleUri);
        const { getAllByLabelText } = render(
            <ImageInputList
                ImageUris={[sampleUri, sampleUri, sampleUri]}
                onRemove={onRemove}
                maxImageCount={maxImageCount}
                onAdd={onAdd}
            />
        );

        // assert
        await waitFor(() => {
            expect(getAllByLabelText("imageInputContainer").length).toBe(
                maxImageCount
            );
        });
    });
});
