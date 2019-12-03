const { part1, part2, restoreGravityAssist } = require("./day2");
const fs = require("fs");

describe("part 1", () => {
  test("example 1", () => {
    const input = [1, 0, 0, 0, 99];
    part1(input);
    expect(input).toStrictEqual([2, 0, 0, 0, 99]);
  });

  test("example 2", () => {
    const input = [2, 3, 0, 3, 99];
    part1(input);
    expect(input).toStrictEqual([2, 3, 0, 6, 99]);
  });

  test("example 3", () => {
    const input = [1, 1, 1, 4, 99, 5, 6, 0, 99];
    part1(input);
    expect(input).toStrictEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
  });

  test("example input", () => {
    const input = fs
      .readFileSync("src/day2.txt")
      .toString()
      .trim()
      .split(",")
      .map(x => parseInt(x, 10));

    restoreGravityAssist(input);
    part1(input);

    expect(input[0]).toBe(3306701);
  });
});

describe("part 2", () => {
  test("example input", () => {
    const input = fs
      .readFileSync("src/day2.txt")
      .toString()
      .trim()
      .split(",")
      .map(x => parseInt(x, 10));

    expect(part2(input)).toBe(7621);
  });
});
