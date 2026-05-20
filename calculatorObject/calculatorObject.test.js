import { calcuculatorObject } from "./calculatorObject";

describe("calculator object", () => {

    test("adds two numbers", () => {
        expect(calcuculatorObject.add(1, 2)).toBe(3);
    });

    test("subtracts 5 from 7 to be 2", () => {
        expect(calcuculatorObject.subtract(7,5)).toBe(2);
    });

    test("divides two numbers", () => {
        expect(calcuculatorObject.divide(4,2)).toBe(2);
    });

})
