const add = require("./string-calculator-tdd");

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});
