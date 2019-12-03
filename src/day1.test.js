const {part1, part2}= require('./day1');
const fs  = require('fs');

describe('part 1', () => {
  test('example 1', () => {
    expect(part1([1969])).toBe(654);
  });

  test('example 2', () => {
    expect(part1([100756])).toBe(33583);
  });

  test('example sum', () => {
    expect(part1([14, 12])).toBe(4);
  });

  test('example input', () => {
    const input = fs.readFileSync('src/day1.txt')
          .toString()
          .split('\n')
          .filter(l => l.length > 1)
          .map(x => parseInt(x, 10));

    expect(part1(input)).toBe(3224048);
  });
});

describe('part 2', () => {
  test('example 1', () => {
    expect(part2([14])).toBe(2);
  });

  test('example 2', () => {
    expect(part2([1969])).toBe(966);
  });

  test('example input', () => {
    const input = fs.readFileSync('src/day1.txt')
          .toString()
          .split('\n')
          .map(x => parseInt(x, 10));

    expect(part2(input)).toBe(4833211);
  });
});
