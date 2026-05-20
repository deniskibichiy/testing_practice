import { reverseString } from "./reverseString";

test("Reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
});