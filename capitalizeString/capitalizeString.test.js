import { capitalizeString } from "./capitalizeString";

test("capitalizes string", () => {
    expect(capitalizeString("denis")).toBe("Denis");
});