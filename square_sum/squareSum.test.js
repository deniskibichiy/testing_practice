import { square_sum } from "./squareSum";

test("squares every number passed and sums the results", () => {
    expect(square_sum([1, 2, 2])).toBe(9);
});