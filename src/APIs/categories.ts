import type { ServerCategories } from "@Types/categories";
import apiClient from "./client";

const endpoint = "categories";

const getCategories = () => apiClient.get<ServerCategories[]>(endpoint);

export default {
    getCategories,
};
