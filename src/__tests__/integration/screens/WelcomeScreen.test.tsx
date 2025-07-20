import { act, fireEvent, render, screen } from "@testing-library/react-native";
import { useRouter } from "expo-router";

import WelcomeScreen from "@Screens/WelcomeScreen";

const navigate = jest.fn();
// Before Each
beforeEach(() => {
    (useRouter as jest.Mock).mockImplementation(() => ({
        navigate,
    }));
    render(<WelcomeScreen />);
});

describe("WelcomeScreen tests", () => {
    it("should test presses", async () => {
        // act
        await act(async () => {
            fireEvent.press(screen.getByText("login"))
            fireEvent.press(screen.getByText("register"))
        })

        // assert
        expect(navigate).toHaveBeenCalledWith("/auth/login")
        expect(navigate).toHaveBeenCalledWith("/auth/register")
    });
});
