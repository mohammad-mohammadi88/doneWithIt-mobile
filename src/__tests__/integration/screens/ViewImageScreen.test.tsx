import { render } from "@testing-library/react-native";

import ViewImageScreen from "@/screens/ViewImageScreen";
import { useApi } from "@/hooks";

describe("ViewImageScreen tests", () => {
    const request = jest.fn();
    (useApi as jest.Mock).mockImplementation(() => ({
        data: {
            images:[{ url: "url1" }, { url: "url2" }],
        },
        request,
    }));
    render(<ViewImageScreen />);
    it("initial test", () => {
        expect(request).toHaveBeenCalledWith("1")
    });
});
