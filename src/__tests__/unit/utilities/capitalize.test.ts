import { capitalize } from "@/utilities";

it("capitalize to first letter and returns", () =>
    expect(capitalize("tesT TeXt")).toBe("TesT TeXt"));
