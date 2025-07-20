import selectImage from "@/utilities/selectImage";
import { launchImageLibraryAsync } from "expo-image-picker";

describe("selectImage", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should give image if not canceled", async () => {
        const uri = "imageUrIInPhone";
        (launchImageLibraryAsync as jest.Mock).mockImplementation(() => ({
            canceled: false,
            assets: [{ uri }],
        }));

        const result = await selectImage();
        expect(result.assets.uri).toStrictEqual(uri)
    });
    it("should give empty string if canceled", async () => {
        (launchImageLibraryAsync as jest.Mock).mockImplementation(() => ({
            canceled: true,
            assets: [],
        }));

        const result = await selectImage();
        expect(result.assets.uri).toBe("")
    });
});
