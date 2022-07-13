describe("StringLength", function () {
stringLength = (str) => {
  if (str.length < 1) {
    throw "string must be longer than or equal 1 character";
  } else if (str.length > 10) {
    throw "string must be lessthan than or equal 10 character";
  } else {
    return str.length;
  }
};

test("String is lenght Eequal", () => {
  expect(stringLength("hello")).toBe(5);
});

test("String is less than 1 character", () => {
    try {
        stringLength("")
    } catch (e) {
        expect(e).toBe("string must be longer than or equal 1 character");
    }
});

test("String is greater than 10 character", () => {

    try {
        stringLength("hello world this is a long string")
    } catch (e) {
        expect(e).toBe("string must be lessthan than or equal 10 character");
    }

});

})
