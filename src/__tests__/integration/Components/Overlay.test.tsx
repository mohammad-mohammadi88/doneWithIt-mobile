import { render } from "@testing-library/react-native";
import { Text } from "react-native";

import { toBeOnScreen, toBeNotOnScreen } from "@Tests/helpers.test";
import Overlay from "@Components/Overlay";

describe("Overlay tests", () => {
    it("should visible text", () => {
        // arrange
        const { getByText } = render(
            <Overlay visible>
                <Text>hello world</Text>
            </Overlay>
        );

        // assert
        toBeOnScreen(getByText("hello world"));
    });
    it("should invisible text", () => {
        // arrange
        const { queryByText } = render(
            <Overlay visible={false}>
                <Text>hello world</Text>
            </Overlay>
        );

        // assert
        toBeNotOnScreen(queryByText("hello world"));
    });
});
