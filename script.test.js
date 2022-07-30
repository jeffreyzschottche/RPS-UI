const script = require('./script');

test('adds 1 + 2 to equal 3', () => {
  expect(script(1, 2)).toBe(3);
});