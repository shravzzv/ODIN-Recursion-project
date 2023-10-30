// fibs.test.js
const { fibs, fibsRec } = require('./fibonacci')

test('fibs generates Fibonacci sequence using iteration', () => {
  expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
})

test('fibsRec generates Fibonacci sequence using recursion for short numbers', () => {
  expect(fibsRec(1)).toEqual([0])
  expect(fibsRec(2)).toEqual([0, 1])
  expect(fibsRec(3)).toEqual([0, 1, 1])
  expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3])
})

test('fibs handles invalid input gracefully', () => {
  expect(fibs(-1)).toBe('Argument must be atleast 1')
})

test('fibsRec handles invalid input gracefully', () => {
  expect(fibsRec(0)).toBe('Argument must be atleast 1')
})
