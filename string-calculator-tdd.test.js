const add = require("./string-calculator-tdd");

test("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return result for a one number", () => {
  expect(add("9")).toBe(9);
});

test("should return result for a two number", () => {
  expect(add("9,1")).toBe(10);
});

test("should return result for a two number", () => {
  expect(add("9,1,10")).toBe(20);
});
