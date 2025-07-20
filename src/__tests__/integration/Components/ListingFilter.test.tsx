import {
    act,
    render,
    screen,
    userEvent,
    waitFor,
} from "@testing-library/react-native";

import { useApi } from "@/hooks";
import ListingFilter from "@Components/ListingFilter";

const setFilteredListings = jest.fn();
const sampleData = [
    {
        categoryId: 1,
        title: "listing title",
        id: 1,
        description: "",
        images: [],
        isSold: false,
        price: 15,
        userId: 1,
    },
];
const getCategories = jest.fn();

const typeText = async (text:string) => {
    await act(async () => {
        const input = screen.getByPlaceholderText(
            "Search with name or category"
        );
        await userEvent.type(input, text);
    });
};
describe("ListingFilter tests", () => {
    (useApi as jest.Mock).mockImplementation(() => ({
        data: [{ id: 1, name: "categoryName" }],
        request: getCategories,
    }));
    // Before Each
    beforeEach(() => {
        render(
            <ListingFilter
                listings={sampleData}
                setFilteredListings={setFilteredListings}
            />
        );
    });
    it("first render", () => {
        expect(setFilteredListings).toHaveBeenCalledWith(sampleData);
        expect(getCategories).toHaveBeenCalled();
    });
    it("should give all listings if search field is empty", async () => {
        // act
        await typeText("")

        // assert
        await waitFor(() => {
            expect(setFilteredListings).toHaveBeenCalledWith(sampleData);
        });
    })
    it("should select with right listing title", async () => {
        // act
        await typeText("listing title")

        // assert
        await waitFor(() => {
            expect(setFilteredListings).toHaveBeenCalledWith(sampleData);
        });

        // act
        await typeText("listing title1")

        // assert
        await waitFor(() => {
            expect(setFilteredListings).toHaveBeenCalledWith([])
        })
    });
    it("should select with right listing category", async () => {
        // act
        await typeText("categoryName")

        // assert
        await waitFor(() => {
            expect(setFilteredListings).toHaveBeenCalledWith(sampleData);
        });

        // act
        await typeText("categoryName1")

        // assert
        await waitFor(() => {
            expect(setFilteredListings).toHaveBeenCalledWith([])
        })
    });
});
