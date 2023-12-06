import { test, expect, describe } from "vitest";
import { count, countUnique } from "./count";

describe("count", () => {
  test.each([
    { value: [], expected: 0 },
    { value: ["a"], expected: 1 },
    { value: ["a", "b"], expected: 2 },
    { value: ["a", "b", "c"], expected: 3 },
  ])("count($value) -> $expected", ({ value, expected }) => {
    expect(count(value)).toEqual(expected);
  });
});

describe("countUnique", () => {
  test.each([
    { value: [], expected: new Map([]) },
    { value: ["a", "a"], expected: new Map([["a", 2]]) },
    {
      value: ["a", "a", "b"],
      expected: new Map([
        ["a", 2],
        ["b", 1],
      ]),
    },
    {
      value: ["a", "b", "b"],
      expected: new Map([
        ["a", 1],
        ["b", 2],
      ]),
    },
  ])("count($value) -> $expected", ({ value, expected }) => {
    expect(countUnique(value)).toEqual(expected);
  });
});
