
const capitalizeFirst = (string) => {
    if(string == null  || string === "" || string.length < 1 || typeof string === "number") {
        return undefined;
    }else{
    return string.charAt(0).toUpperCase() + string.slice(1);
    }
};

describe("Capitalize First", function () {
    test("the first letter of a string in uppercase", () => {
      expect(capitalizeFirst("hello")).toBe("Hello");
    });
  
    test("Empty or Non a String Value", () => {
      expect(capitalizeFirst("")).toBeUndefined();
    });
  });