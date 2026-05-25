import { isLeapYear } from "./leapYears";
/* 
it("Year 2020 is a leap year", () => {
      assert.strictEqual(isLeapYear(2020), true, "Incorrect answer for year = 2020");
  });

  it("Year 2000 is a leap year", () => {
      assert.strictEqual(isLeapYear(2000), true, "Incorrect answer for year = 2000");
  });

  it("Year 2015 is not a leap year", () => {
      assert.strictEqual(isLeapYear(2015), false, "Incorrect answer for year = 2015");
  });

  it("Year 2100 is not a leap year", () => {
      assert.strictEqual(isLeapYear(2100), false, "Incorrect answer for year = 2100");
  });

*/

describe("Leap year test", () => {
    test("Year 2020 is a leap year", () => {
        expect(isLeapYear(2020)).toBe(true);
    });

    test.skip("Year 2000 is a leap year", () => {
        expect(isLeapYear(2000)).toBe(true);
    });

    test.skip("Year 2015 is not a leap year", () => {
        expect(isLeapYear(2015)).toBe(false);
    });

    test.skip("Year 2100 is not a leap year", () => {
        expect(isLeapYear(2100)).toBe(false);
    });
})