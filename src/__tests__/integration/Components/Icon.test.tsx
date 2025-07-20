import Icon from "@Components/Icon";
import defaultStyles from "@Constants/styles";
import { render, screen } from "@testing-library/react-native";

const size = 50;
const backgroundColor = "white";
// Before Each
beforeEach(() => {
    render(<Icon icon='apps' backgroundColor={backgroundColor} size={size} />);
});

describe("Icon tests", () => {
    it("should test container style", () => {
        expect(screen.getByLabelText("IconContainer")).toHaveStyle({
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            ...defaultStyles.flexCenter,
        });
    });
});
