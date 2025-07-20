import { act, fireEvent, render, screen } from "@testing-library/react-native";

import { registerValidation } from "@Constants/validations";
import { RegisterFormLogic } from "@Components/FormsLogic";
import { Validation } from "./ListingChangeLogic.test";
import { toBeOnScreen } from "@Tests/helpers.test";
import { AppForm } from "@Components/form";

// Before Each
beforeEach(() => {
    render(
        <AppForm
            initialValues={{
                password: "",
                email: "",
                name: ""
            }}
            onSubmit={jest.fn()}
            validationSchema={registerValidation}
        >
            <RegisterFormLogic />
        </AppForm>
    );
});

const validation: Required<Validation>[] = [
    {
        expectedError: "Email is a required field",
        fieldPlaceholder: "Email",
        input: "",
    },
    {
        expectedError: "Email must be a valid email",
        fieldPlaceholder: "Email",
        input: "ab",
    },
    {
        expectedError: "Username is a required field",
        fieldPlaceholder: "Username",
        input: "",
    },
    {
        expectedError: "Username must be at least 2 characters",
        fieldPlaceholder: "Username",
        input: "a",
    },

    {
        expectedError: "Password is a required field",
        fieldPlaceholder: "Password",
        input: "",
    },
    {
        expectedError: "Password must be at least 5 characters",
        fieldPlaceholder: "Password",
        input: "pass",
    },
];

describe.each(validation)(
    "Validation Register form",
    ({ expectedError, input, fieldPlaceholder }) => {
        it(expectedError, async () => {
            // act
            await act(async () => {
                fireEvent.changeText(
                    screen.getByPlaceholderText(fieldPlaceholder),
                    input
                );
            });

            // arrange
            toBeOnScreen(screen.getByText(expectedError));
        });
    }
);
