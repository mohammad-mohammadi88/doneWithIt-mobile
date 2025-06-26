import apiClient from "./client";

const endpoint = "auth";

const login = (email: string, password: string) =>
    apiClient.post(endpoint, { email, password });

export default {
    login
}