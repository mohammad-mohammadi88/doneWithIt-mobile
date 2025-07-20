import { render } from "@testing-library/react-native";
import { Redirect } from "expo-router";

import Redirector from "@Components/Redirector";
import { useAuth } from "@/hooks";

describe("Redirector tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should redirect to /(tabs)/Feed", () => {
        // arrange
        (useAuth as jest.Mock).mockImplementation(() => ({
            user: {
                id: 1,
                name: "admin",
            },
        }));
        render(<Redirector />);

        // assert
        expect((Redirect as jest.Mock).mock.calls[0][0].href).toBe(
            "/(tabs)/Feed"
        );
    });
    it("should redirect to /welcome", () => {
        // arrange
        (useAuth as jest.Mock).mockImplementation(() => ({
            user: undefined,
        }));
        render(<Redirector />);

        // assert
        expect((Redirect as jest.Mock).mock.calls[0][0].href).toBe("/welcome");
    });
});
