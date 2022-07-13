const Calculator = require("./calculator.js");
const calculator = new Calculator();

describe("Testing Calculator", () => {
  describe("Addition Operations", () => {
    test("Contains Empty Input", () => {
      expect(() => calculator.add(3)).toThrowError(
        Error("Number could not be empty")
      );
    });
    test("Contains Non digit value", () => {
      expect(() => calculator.add(3, "rth")).toThrowError(
        Error("input is not a number")
      );
    });

    test("Three plus five", () => {
      expect(calculator.add(3, 5)).toBe(8);
    });
  });

  describe("Subtract Operations", () => {
    test("Contains Empty Input", () => {
      expect(() => calculator.subtract(3)).toThrowError(
        Error("Number could not be empty")
      );
    });
    test("Contains Non digit value", () => {
      expect(() => calculator.subtract(3, "rth")).toThrowError(
        Error("input is not a number")
      );
    });

    test("Five minus two", () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });
  });

  describe("Multiplication Operations", () => {
    test("Contains Empty Input", () => {
      expect(() => calculator.multiply(3)).toThrowError(
        Error("Number could not be empty")
      );
    });
    test("Contains Non digit value", () => {
      expect(() => calculator.multiply(3, "rth")).toThrowError(
        Error("input is not a number")
      );
    });

    test("Two Times five", () => {
      expect(calculator.multiply(2, 5)).toBe(10);
    });
  });

  describe("Divide Operations", () => {
    test("Contains Empty Input", () => {
      expect(() => calculator.divide(3)).toThrowError(
        Error("Number could not be empty")
      );
    });
    test("Contains Non digit value", () => {
      expect(() => calculator.divide(3, "rth")).toThrowError(
        Error("input is not a number")
      );
    });

    test("Ten Divided by two", () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test("Three divided by 0", () => {
      expect(() => calculator.divide(3, 0)).toThrowError(
        Error("Divide by 0 is Undefined")
      );
    });
  });
});
