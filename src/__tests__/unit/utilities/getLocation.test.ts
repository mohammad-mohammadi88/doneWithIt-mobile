import * as Location from "expo-location";
import getLocation from "@/utilities/getLocation";

describe("getLocation", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should set coords if successful",async  () => {
        const coords = {
            latitude: 25.54,
            longitude: 13.24,
        };
        (Location.getCurrentPositionAsync as jest.Mock).mockImplementationOnce(
            () => ({
                coords,
            })
        );
        
        const setCoords = jest.fn();
        const setIslocationReady = jest.fn();
        await getLocation(setCoords, setIslocationReady);

        expect(setIslocationReady).toHaveBeenCalledWith(true);
        expect(setCoords).toHaveBeenCalledWith(coords);
    });
    it("should set coords if successful",async  () => {
        const coords = undefined;
        (Location.getCurrentPositionAsync as jest.Mock).mockImplementationOnce(
            () => ({
                coords,
            })
        );
        
        const setCoords = jest.fn();
        const setIslocationReady = jest.fn();
        await getLocation(setCoords, setIslocationReady);

        expect(setIslocationReady).toHaveBeenCalledWith(true);
        expect(setCoords).not.toHaveBeenCalled();
    });
});
