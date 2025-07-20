import InitialLayout from "@Components/InitialLayout";
import { render, screen } from "@testing-library/react-native";
import { Dimensions, View } from "react-native";

describe("InitialLayout tests", () => {
    const statusBarHeight = 40;
    const screenHeight = 800;
    const offlineNoticeHeight = 50
    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(Dimensions, "get").mockImplementation(() => ({
            height: screenHeight,
            width: 300,
            fontScale: 1,
            scale: 1,
        }));
    });
    test("online status", () => {
        // arrange
        const { getByLabelText } = render(
            <InitialLayout isOffline={false}>
                <View />
            </InitialLayout>
        );

        // assert
        expect(getByLabelText("InitialLayoutContainer")).toHaveStyle({
            backgroundColor:expect.anything(),
            height: screenHeight - statusBarHeight,
            top: statusBarHeight
        })
    });
    test("offline status", () => {
        // arrange
        const { getByLabelText } = render(
            <InitialLayout isOffline>
                <View />
            </InitialLayout>
        );

        // assert
        expect(getByLabelText("InitialLayoutContainer")).toHaveStyle({
            backgroundColor:expect.anything(),
            height: screenHeight - statusBarHeight - offlineNoticeHeight,
            top: statusBarHeight + offlineNoticeHeight
        })
    });
});
