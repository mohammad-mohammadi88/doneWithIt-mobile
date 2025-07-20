import { setBody } from "@/utilities";

describe("setBody", () => {
    it("should create right formData",() => {
        const formData = setBody({
            images: [],
            categoryId: 1,
            description:"description",
            title: "title",
            price: 15,
            latitude: 14.52,
            longitude: 25.2444
        })

        expect(formData.get("title")).toBe("title")
        expect(formData.get("description")).toBe("description")
        expect(formData.get("price")).toBe("15")
        expect(formData.get("categoryId")).toBe("1")
        expect(formData.get("images")).toBe(null)
        expect(formData.get("latitude")).toBe("14.52")
        expect(formData.get("longitude")).toBe("25.2444")
    })
});
