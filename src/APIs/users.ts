import { RegisterInterface } from "@/types/Forms";
import apiClient from "./client";

const endpoint = "users";

const registerUser = (data: RegisterInterface) =>
    apiClient.post(endpoint, data);

export default {
    registerUser,
};
