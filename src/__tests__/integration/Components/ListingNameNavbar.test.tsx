import { render, waitFor } from "@testing-library/react-native";
import { Alert } from "react-native";

import ListingNameNavbar from "@Components/ListingNameNavbar";
import { toBeOnScreen } from "@Tests/helpers.test";
import { useApi } from "@/hooks";

// Before Each
beforeEach(() => {
    jest.clearAllMocks();
});

describe("ListingNameNavbar tests", () => {
    it("should display Alert and error if there is a error", async () => {
        // arrange
        const request = jest.fn();
        (useApi as jest.Mock).mockImplementation(() => ({
            error: true,
            request,
        }));
        const alertSpy = jest.spyOn(Alert, "alert");
        const { getByText } = render(<ListingNameNavbar listingId={1} />);

        // assert
        await waitFor(() => {
            expect(request).toHaveBeenCalled();
            expect(alertSpy).toHaveBeenCalledWith(
                "Error",
                "Something went wrong while getting listing name"
            );
            toBeOnScreen(getByText("Error! Please try again!"));
        });
    });
    it("should display loading while getting data", async () => {
        // arrange
        (useApi as jest.Mock).mockImplementation(() => ({
            isLoading: true,
            error: false,
            request: jest.fn(),
        }));
        const { getByText } = render(<ListingNameNavbar listingId={1} />);

        // assert
        await waitFor(() => {
            toBeOnScreen(getByText("loading ..."));
        });
    });
    it("should display listing title if request successful", async () => {
        // arrange
        (useApi as jest.Mock).mockImplementation(() => ({
            isLoading: false,
            error: undefined,
            request: jest.fn(),
            data: {
                title: "listing title",
            },
        }));
        const { getByText } = render(<ListingNameNavbar listingId={1} />);

        // assert
        await waitFor(() => {
            toBeOnScreen(getByText("listing title"));
        });
    });
});
