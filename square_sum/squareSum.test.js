import { square_sum } from "./squareSum";

describe("square_sum tests", () => {
    test("squares real numbers", () => {
        expect(square_sum([1, 2, 2])).toBe(9);
    });

    test("squares numbers including zero", () => {
        expect(square_sum([0, 3, 4, 5])).toBe(50);
    });

    test("squares empty argument", () => {
        expect(square_sum([])).toBe(0);
    });
})