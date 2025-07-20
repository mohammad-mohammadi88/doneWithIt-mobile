import { act, fireEvent, render, screen } from "@testing-library/react-native";

import { loginValidation } from "@Constants/validations";
import { LoginFormLogic } from "@Components/FormsLogic";
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
            }}
            onSubmit={jest.fn()}
            validationSchema={loginValidation}
        >
            <LoginFormLogic />
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
        expectedError: "Password is a required field",
        fieldPlaceholder: "Password",
        input: "",
    },
    {
        expectedError: "Password must be at least 5 characters",
        fieldPlaceholder: "Password",
        input: "pass",
    }
];

describe.each(validation)(
    "Validation Login form",
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
            toBeOnScreen(screen.getByText(expectedError))
        });

    }
);
