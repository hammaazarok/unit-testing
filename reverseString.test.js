describe("Reverse String", function () {
strignReverse = (str) => {
    if (str.length < 1) {
      return "empty";
    } else {
      return str.split('').reverse().join("");
    }
  };
  
  test("Reversed String", () => {
    expect(strignReverse("hello")).toBe("olleh");
  });
  
  test("Empty String", () => {
    expect(strignReverse('')).toBe("empty");
  });
})