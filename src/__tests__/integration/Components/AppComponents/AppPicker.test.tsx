import { act, fireEvent, render, screen } from "@testing-library/react-native";
import { useState } from "react";

import { toBeNotOnScreen, toBeOnScreen } from "@Tests/helpers.test";
import { AppPicker } from "@Components/AppComponents";

const Component = () => {
    const [selectedItem, setSelectedItem] = useState(undefined);
    return (
        <AppPicker
            placeholder='category'
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            selectOptions={[
                {
                    item: {
                        icon: {
                            icon: "shoe-heel",
                            backgroundColor: "blue",
                        },
                        label: "clothing",
                    },
                    value: 1,
                },
            ]}
        />
    );
};
// Before Each
beforeEach(() => {
    render(<Component />);
    jest.clearAllMocks();
});

describe("AppPicker tests", () => {
    it("should display no selected item", () => {
        expect(screen.getByLabelText("selectedLabel")).toHaveTextContent(
            "category"
        );
    });
    it("should select item and display it", async () => {
        // act
        await act(async () => {
            // open modal
            fireEvent.press(screen.getByLabelText("selectedLabel"));
        });

        // assert
        toBeOnScreen(screen.getByLabelText("pickerModal"));
        toBeOnScreen(screen.getByText("clothing"));

        // act
        await act(async () => {
            fireEvent.press(screen.getByText("clothing"));
        });

        // assert
        expect(screen.getByLabelText("selectedLabel")).toHaveTextContent(
            "clothing"
        );
    });
    it("should close modal with close button", async () => {
        // act
        await act(async () => {
            // open modal
            fireEvent.press(screen.getByLabelText("selectedLabel"));
        });

        // assert
        toBeOnScreen(screen.getByLabelText("pickerModal"));

        // act
        await act(async () => {
            // close button
            fireEvent.press(screen.getByLabelText("closeButton"));
        });

        // assert
        toBeNotOnScreen(screen.queryByLabelText("pickerModal"));
    });
});
