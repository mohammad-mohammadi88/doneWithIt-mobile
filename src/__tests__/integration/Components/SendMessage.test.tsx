import { Alert } from "react-native";
import {
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react-native";

import { toBeNotOnScreen, toBeOnScreen } from "@Tests/helpers.test";
import SendMessage from "@Components/SendMessage";
import { useIsOffline } from "@/hooks";
import { messagesApi } from "@/APIs";

const fillForm = () => {
    const messageInput = screen.getByPlaceholderText(/Send Message.../);
    const button = screen.getByText(/send message/);
    fireEvent.changeText(messageInput, "hello");
    fireEvent.press(button);
};
describe("SendMessage tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    const setVisible = jest.fn();
    it("should return null on offline status", () => {
        // arrange
        (useIsOffline as jest.Mock).mockImplementation(() => true);
        const { queryByText } = render(
            <SendMessage visible listingId={1} setVisible={setVisible} />
        );

        // assert
        toBeNotOnScreen(queryByText("send message"));
    });
    it("should return null on visible={false} prop", () => {
        // arrange
        const { queryByText } = render(
            <SendMessage
                visible={false}
                listingId={1}
                setVisible={setVisible}
            />
        );

        // assert
        toBeNotOnScreen(queryByText("send message"));
    });
    it("should return null if neither listingId or userId props", () => {
        // arrange
        const { queryByText } = render(
            <SendMessage visible setVisible={setVisible} />
        );

        // assert
        toBeNotOnScreen(queryByText("send message"));
    });
    it("should send message successfully", async () => {
        // arrenge
        (useIsOffline as jest.Mock).mockImplementation(() => false);
        (messagesApi.sendMessage as jest.Mock).mockImplementation(() => ({
            ok: true,
            data: undefined,
        }));
        const { getByTestId } = render(
            <SendMessage visible listingId={1} setVisible={setVisible} />
        );

        // act
        fillForm();

        // assert
        await waitFor(() => {
            toBeOnScreen(getByTestId("lottieAnimation"));
        });
    });
    it("should display alert if sendMessage is successful", async () => {
        // arrenge
        (useIsOffline as jest.Mock).mockImplementation(() => false);
        (messagesApi.sendMessage as jest.Mock).mockImplementation(() => ({
            ok: true,
            data: undefined,
        }));
        render(<SendMessage visible listingId={1} setVisible={setVisible} />);
        const alertSpy = jest.spyOn(Alert, "alert");

        // act
        fillForm();

        // assert
        await waitFor(() => {
            expect(alertSpy).toHaveBeenCalledWith("Sent", "Your Message Sent", [
                { text: "ok" },
            ]);
        });
    });
    it("should display error alert if request rejected", async () => {
        // arrenge
        (useIsOffline as jest.Mock).mockImplementation(() => false);
        (messagesApi.sendMessage as jest.Mock).mockImplementation(() => ({
            ok: false,
            data: { error: "Error Message" },
        }));
        render(<SendMessage visible listingId={1} setVisible={setVisible} />);
        const alertSpy = jest.spyOn(Alert, "alert");

        // act
        fillForm();

        // assert
        await waitFor(() => {
            expect(alertSpy).toHaveBeenCalledWith("Error", "Error Message");
        });
    });
});
