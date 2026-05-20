import { analyzeArray } from "./analyzeArray";

describe("Analyze Array Module", () => {

    test("finds average of array values", () => {
        expect(analyzeArray.length([1, 8, 3, 4, 2, 6])).toBe(6);
    });

    test("finds the mininum", () => {
        expect(analyzeArray.average([1, 8, 3, 4, 2, 6])).toBe(4);
    });

    
})