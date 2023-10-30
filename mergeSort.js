/* Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology. */

const mergeSort = (arr) => {
  if (arr.length < 1) return 'Input must have atleast one element!'
  if (arr.length === 1) return arr

  let sliceIdx = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, sliceIdx))
  let right = mergeSort(arr.slice(sliceIdx))

  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  const merged = []
  let lIdx = 0
  let rIdx = 0

  // Compare elements from the left and right arrays and merge them in sorted order
  while (lIdx < left.length && rIdx < right.length) {
    if (left[lIdx] < right[rIdx]) {
      merged.push(left[lIdx])
      lIdx++
    } else {
      merged.push(right[rIdx])
      rIdx++
    }
  }

  // If there are remaining elements in the left and right arrays, add them to the merged array
  return [...merged, ...left.slice(lIdx), ...right.slice(rIdx)]
}

module.exports = { mergeSort, merge }
