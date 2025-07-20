import { useApi, useMediaImage, useMediaPermission } from "@/hooks";
import { AppForm } from "@Components/form";
import { ListingChangeLogic } from "@Components/FormsLogic";
import { listingChangeValidation } from "@Constants/validations";
import {
    act,
    fireEvent,
    render,
    screen,
    waitFor,
} from "@testing-library/react-native";
import { PermissionStatus } from "expo-image-picker";
import { toBeOnScreen } from "@Tests/helpers.test";
import { ServerCategories } from "@Types/categories";
import { Alert } from "react-native";
import { Redirect } from "expo-router";

const onSubmit = jest.fn();
const sampleCategories: ServerCategories[] = [
    {
        id: 1,
        name: "categoryName",
        backgroundColor: "white",
        color: "red",
        icon: "apps",
    },
];
const useApiResolve = () => ({
    data: sampleCategories,
    request: jest.fn(),
});

const renderComponent = () => {
    const initialValues = {
        title: "",
        description: "",
        price: "",
        category: {
            selectedLabel: "",
            selectedValue: 0,
            selectedIcon: "apps",
        },
        images: [],
    };
    return render(
        <AppForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={listingChangeValidation}
        >
            <ListingChangeLogic />
        </AppForm>
    );
};
const launchImage = jest.fn();
beforeEach(() => {
    jest.clearAllMocks();
    (useMediaImage as jest.Mock).mockImplementation(() => ({
        permissionStatus: PermissionStatus.GRANTED,
        launchImage,
    }));
    (useMediaPermission as jest.Mock).mockImplementation(
        () => PermissionStatus.GRANTED
    );
    (useApi as jest.Mock).mockImplementation(useApiResolve);
    renderComponent();
});
describe("ListingChangeLogic tests", () => {
    it("Permission UNDETERMINED", () => {
        // arrange
        screen.unmount();
        (useMediaPermission as jest.Mock).mockImplementation(
            () => PermissionStatus.UNDETERMINED
        );
        const { getByText } = renderComponent();

        // assert
        toBeOnScreen(
            getByText(
                "You should allow or deny your gallery permission to continue"
            )
        );
    });
    it("Permission DENIED", () => {
        // arrange
        screen.unmount();
        (useMediaPermission as jest.Mock).mockImplementation(
            () => PermissionStatus.DENIED
        );
        const alertSpy = jest.spyOn(Alert, "alert");
        renderComponent();

        // assert
        expect(alertSpy).toHaveBeenCalledWith(
            "Permission",
            "You should allow us to access your gallery"
        );
        expect((Redirect as jest.Mock).mock.calls[0][0].href).toBe(
            "/(tabs)/Feed"
        );
    });
});

export interface Validation {
    fieldPlaceholder?: string;
    input: string;
    expectedError: string;
}
const validation: Validation[] = [
    {
        expectedError: "Title is a required field",
        fieldPlaceholder: "Title",
        input: "",
    },
    {
        expectedError: "Title must be at least 3 characters",
        fieldPlaceholder: "Title",
        input: "ab",
    },
    {
        expectedError: "Price is a required field",
        fieldPlaceholder: "Price",
        input: "",
    },
    {
        expectedError: "Price must be greater than or equal to 1",
        fieldPlaceholder: "Price",
        input: "0",
    },
    {
        expectedError: "Price must be less than or equal to 10000",
        fieldPlaceholder: "Price",
        input: "10001",
    },
    {
        expectedError: "Category is a required field",
        input: "",
    },
    {
        expectedError: "Please select at least one image",
        input: "",
    },
];

describe.each(validation)(
    "Validate Change Listing form",
    ({ expectedError, input, fieldPlaceholder }) => {
        it(expectedError, async () => {
            // arrange
            jest.clearAllMocks();
            (useMediaPermission as jest.Mock).mockImplementation(
                () => PermissionStatus.GRANTED
            );
            (useApi as jest.Mock).mockImplementation(useApiResolve);
            renderComponent();

            // act
            await act(async () => {
                if (fieldPlaceholder) {
                    fireEvent.changeText(
                        screen.getByPlaceholderText(fieldPlaceholder),
                        input
                    );
                }
            });
            await act(async () => {
                fireEvent.press(screen.getByText(/post/));
            });

            // assert
            await waitFor(() => {
                toBeOnScreen(screen.getByText(expectedError));
            });
        });
    }
);
