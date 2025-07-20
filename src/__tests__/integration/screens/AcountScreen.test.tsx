import { useRouter } from "expo-router";
import {
    act,
    render,
    screen,
    userEvent,
    waitFor,
} from "@testing-library/react-native";

import { toBeOnScreen } from "@Tests/helpers.test";
import AccountScreen from "@Screens/AccountScreen";
import { useAuth } from "@/hooks";

const logOut = jest.fn();
const name = "admin";
const email = "email@gmail.com";
const navigate = jest.fn();

// Before Each
beforeEach(() => {
    (useRouter as jest.Mock).mockImplementation(() => ({
        navigate,
    }));

    (useAuth as jest.Mock).mockImplementation(() => ({
        logOut,
        user: {
            name,
            email,
        },
    }));
    render(<AccountScreen />);
});

describe("AcountScreen tests", () => {
    it("should render listItems and actions", async () => {
        // assert
        const myListings = screen.getByText("My Listings");
        const myMessages = screen.getByText("My Messages");
        const logOutBtn = screen.getByText("log out");
        toBeOnScreen(screen.getByText(name));
        toBeOnScreen(screen.getByText(email));
        toBeOnScreen(myListings);
        toBeOnScreen(myMessages);
        toBeOnScreen(logOutBtn);

        // act
        await act(async () => {
            await userEvent.press(myListings);
            await userEvent.press(myMessages);
            await userEvent.press(logOutBtn);
        });

        // assert
        await waitFor(() => {
            expect(navigate).toHaveBeenCalledWith(
                "/account/myListings"
            );
            expect(navigate).toHaveBeenCalledWith(
                "/account/myMessages"
            );
            expect(logOut).toHaveBeenCalled();
        });
    });
});
