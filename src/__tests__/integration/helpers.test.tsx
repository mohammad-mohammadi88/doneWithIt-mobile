import { render } from "@testing-library/react-native";
import type { ReactNode } from "react";
import { Text } from "react-native";

export const toBeOnScreen = (element: ReactNode) =>
    expect(element).toBeOnTheScreen();

export const toBeNotOnScreen = (element: null | undefined) =>
    expect(element).not.toBeOnTheScreen();

it("should check helper functions", () => {
    const { queryByText } = render(<Text>hello world</Text>);
    toBeOnScreen(queryByText("hello world"));
    toBeNotOnScreen(queryByText("bye world"));
});
