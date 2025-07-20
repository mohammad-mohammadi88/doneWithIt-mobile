// mocking
jest.mock("expo-constants", () => ({
    statusBarHeight: 50,
}));

import { render } from "@testing-library/react-native";

import { toBeOnScreen, toBeNotOnScreen } from "@Tests/helpers.test";
import OfflineNotice from "@Components/OfflineNotice";
import { useIsOffline } from "@/hooks";

describe("OfflineNotice tests", () => {
    it("should visible text on offline status", () => {
        // arrange
        (useIsOffline as jest.Mock).mockImplementation(() => true);
        const { getByText } = render(<OfflineNotice />);

        // assert
        toBeOnScreen(getByText("No Internet Connection"));
    });
    it("should invisible text on online status", () => {
        // arrange
        (useIsOffline as jest.Mock).mockImplementation(() => false);
        const { queryByText } = render(<OfflineNotice />);

        // assert
        toBeNotOnScreen(queryByText("No Internet Connection"));
    });
});
