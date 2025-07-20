import { render } from "@testing-library/react-native";
import { Dimensions, View } from "react-native";

import LayoutWithHeader from "@Components/LayoutWithHeader";

describe("LayoutWithHeader tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(Dimensions, "get").mockImplementation(() => ({
            height: 800,
            width: 300,
            fontScale: 1,
            scale: 1,
        }));
    });
    test("without tabbar", () => {
        // arrange
        const { getByLabelText } = render(
            <LayoutWithHeader>
                <View />
            </LayoutWithHeader>
        );

        // assert
        expect(getByLabelText("LayoutWithHeaderContainer")).toHaveStyle({
            height: 800,
            top: -40,
        });
    });
    test("with tabbar", () => {
        // arrange
        const { getByLabelText } = render(
            <LayoutWithHeader tabbarHeight={50}>
                <View />
            </LayoutWithHeader>
        );

        // assert
        expect(getByLabelText("LayoutWithHeaderContainer")).toHaveStyle({
            height: 750,
            top: -40,
        });
    });
});
