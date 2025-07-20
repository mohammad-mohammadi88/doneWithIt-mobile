import { PermissionStatus } from "expo-image-picker";
import { Alert } from "react-native";
import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react-native";

import { toBeNotOnScreen, toBeOnScreen } from "@Tests/helpers.test";
import { ImageInput } from "@Components/AppComponents";
import { useMediaImage } from "@/hooks";

const onChangeImage = jest.fn();
const sampleUri = "file://imageuri.jpg";
const assets = {
    uri: sampleUri,
    mimeType: "image/jpeg",
};
const launchImage = jest.fn().mockImplementation(() => ({
    assets,
    canceled: false,
}));

describe("ImageInput tests", () => {
    beforeEach(() => {
        (useMediaImage as jest.Mock).mockImplementation(() => ({
            permissionStatus: PermissionStatus.GRANTED,
            launchImage,
        }));
        render(<ImageInput onChangeImage={onChangeImage} />);
        jest.clearAllMocks();
    });
    it("shouldn't display image when imageUri is undefined", () => {
        toBeNotOnScreen(screen.queryByLabelText("selectedImage"));
    });
    it("should add image uri when image selected", async () => {
        // act
        await act(async () => {
            fireEvent.press(screen.getByLabelText("imageInputContainer"));
        });

        // assert
        expect(onChangeImage).toHaveBeenCalledWith(assets);
    });
    it("should display image when imageUri is defined", () => {
        // arrange
        screen.unmount();
        const { getByLabelText } = render(
            <ImageInput imageUri={sampleUri} onChangeImage={onChangeImage} />
        );

        // assert
        toBeOnScreen(getByLabelText("selectedImage"));
    });
    it("should delete imageUri when pressed on selected image", async () => {
        // arrange
        screen.unmount();
        const { getByLabelText } = render(
            <ImageInput imageUri={sampleUri} onChangeImage={onChangeImage} />
        );
        const alertSpy = jest.spyOn(Alert, "alert");

        // act
        await act(async () => {
            fireEvent.press(getByLabelText("imageInputContainer"));
        });

        // assert
        await waitFor(() => {
            expect(alertSpy).toHaveBeenCalledWith(
                "Delete",
                "Are You sure you want to delete this image?",
                expect.anything()
            );
            // press delete confirm
            alertSpy.mock.calls[0][2]?.[1].onPress?.();
            
            expect(onChangeImage).toHaveBeenCalledWith({uri: sampleUri})
        });
    });
});
