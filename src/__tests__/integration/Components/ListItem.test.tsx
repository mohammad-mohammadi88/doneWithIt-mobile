import ListItem from "@Components/ListItem";
import { act, fireEvent, render } from "@testing-library/react-native";

describe("ListItem tests", () => {
    it("should display chevron", async () => {
        const onPress = jest.fn();
        // arrange
        const { getByLabelText } = render(
            <ListItem
                title='title'
                image={require("@Images/user.jpg")}
                accessibilityLabel='container'
                onPress={onPress}
            />
        );

        // act
        await act(async () => {
            fireEvent.press(getByLabelText("container"));
        });

        // assert
        expect(onPress).toHaveBeenCalled();
    });
});
