import type { ServerCategories } from "@Types/categories";
import apiClient from "./client";

const endpoint = "categories";

export const getCategories = async () =>
    await apiClient.get<ServerCategories[]>(endpoint);


export default {
    getCategories
}