import apiClient from "@/APIs/client"
import authApi from "@/APIs/auth"

describe("authApi", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should call login with correct arguments", () => {
        const email = "email@gmail.com";
        const password = "password";

        authApi.login(email, password);

        expect(apiClient.post).toHaveBeenCalledWith("auth/login", {
            email,
            password,
        });
    });
    it("should call register with correct arguments", () => {
        const email = "example@gmail.com";
        const password = "password";
        const name = "name";
        const data = {
            email,
            password,
            name,
        };
        authApi.register(data);

        expect(apiClient.post).toHaveBeenCalledWith("auth/register", data);
    });
});
