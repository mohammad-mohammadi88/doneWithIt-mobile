import apiClient from "@/APIs/client"
import categoriesApi from "@/APIs/categories"

describe("categoriesApi", () => {
    it("should call get categories with correct arguments", () => {
        categoriesApi.getCategories();
        expect(apiClient.get).toHaveBeenCalledWith("categories");
    });
});
