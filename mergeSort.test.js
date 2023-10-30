// mergeSort.test.js
const { mergeSort, merge } = require('./mergeSort')

test('mergeSort sorts an array correctly', () => {
  expect(mergeSort([1, 5, 99, 3, 4, 0, -8, 54])).toEqual([
    -8, 0, 1, 3, 4, 5, 54, 99,
  ])
})

test('mergeSort handles an empty array', () => {
  expect(mergeSort([])).toEqual('Input must have atleast one element!')
})

test('mergeSort handles an array with one element', () => {
  expect(mergeSort([42])).toEqual([42])
})

test('merge merges two sorted arrays correctly', () => {
  const left = [1, 3, 5]
  const right = [2, 4, 6]
  expect(merge(left, right)).toEqual([1, 2, 3, 4, 5, 6])
})
