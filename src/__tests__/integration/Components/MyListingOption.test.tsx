import { Alert } from "react-native";
import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react-native";
import { toBeNotOnScreen, toBeOnScreen } from "@Tests/helpers.test";
import MyListingOption from "@Components/MyListingOption";
import { listingApi, listingsApi } from "@/APIs";

const openModal = async () => {
    await act(async () => {
        fireEvent.press(screen.getByLabelText("openModal"));
    });
};

const handleAlertAndConfirm = async (text: string) => {
    const alertButtons = jest.spyOn(Alert, "alert");
    await act(async () => {
        fireEvent.press(screen.getByText(text));
    });

    await act(async () => {
        alertButtons.mock.calls[0][2]?.[1]?.onPress?.(); 
    });
};

describe("MyListingOption tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        render(<MyListingOption listingId='1' isMyListing />);
    });

    afterEach(() => {
        screen.unmount();
    });

    it("should invisible if not my listing", () => {
        screen.unmount();
        const { queryByLabelText } = render(
            <MyListingOption listingId='1' isMyListing={false} />
        );
        toBeNotOnScreen(queryByLabelText("openModal"));
    });

    it("should visible if my listing", () => {
        toBeOnScreen(screen.getByLabelText("openModal"));
    });

    it("should show modal, display options and hide modal with openModal button press", async () => {
        await openModal();

        toBeOnScreen(screen.getByText("Listing Sold Out"));
        toBeOnScreen(screen.getByText("Edit Listing"));
        toBeOnScreen(screen.getByText("Delete Listing"));

        await act(async () => {
            fireEvent.press(screen.getByLabelText("hideModal"));
        });

        toBeNotOnScreen(screen.queryByText("Listing Sold Out"));
        toBeNotOnScreen(screen.queryByText("Edit Listing"));
        toBeNotOnScreen(screen.queryByText("Delete Listing"));
    });

    it("should display alert if deleteListing is successful", async () => {
        (listingsApi.deleteListing as jest.Mock).mockResolvedValue({
            ok: true,
            data: undefined,
        });

        await openModal();
        await handleAlertAndConfirm("Delete Listing");

        await waitFor(() => {
            toBeOnScreen(screen.getByLabelText("progressScreen"));
            toBeOnScreen(screen.getByTestId("lottieAnimation"));
        });
    });

    it("should display error alert if delete request rejects", async () => {
        (listingsApi.deleteListing as jest.Mock).mockResolvedValue({
            ok: false,
            data: { error: "Error Message" },
        });

        const alertSpy = jest.spyOn(Alert, "alert");

        await openModal();
        await handleAlertAndConfirm("Delete Listing");

        await waitFor(() => {
            expect(alertSpy).toHaveBeenCalledWith("Error", "Error Message");
        });
    });

    it("should display alert if markAsSoldOut is successful", async () => {
        (listingApi.markAsSoldOut as jest.Mock).mockResolvedValue({
            ok: true,
            data: undefined,
        });

        await openModal();
        await handleAlertAndConfirm("Listing Sold Out");

        await waitFor(() => {
            toBeOnScreen(screen.getByLabelText("progressScreen"));
            toBeOnScreen(screen.getByTestId("lottieAnimation"));
        });
    });

    it("should display error alert if patch request rejects", async () => {
        (listingApi.markAsSoldOut as jest.Mock).mockResolvedValue({
            ok: false,
            data: { error: "Error Message" },
        });

        const alertSpy = jest.spyOn(Alert, "alert");

        await openModal();
        await handleAlertAndConfirm("Listing Sold Out");

        await waitFor(() => {
            expect(alertSpy).toHaveBeenCalledWith("Error", "Error Message");
        });
    });
});
