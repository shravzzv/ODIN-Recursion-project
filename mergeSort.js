/* Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology. */

const mergeSort = (arr) => {
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

console.log(mergeSort([1, 5, 99, 3, 4, 0, -8, 54]))

/* 
1. Select the entire array
2. Split the array as evenly as possible
3. Keep splitting the array by halves until only a single element remains
4. An array of length 1 cannot be split, ready for merge
5. Merge selected arrays back together, in sorted order
6. Select the minimum of the two values
7. Add the selected value to the sorted array
8. When one list becomes empty, copy all values from the remaining array into the sorted array
9. Add the selected value to the sorted array
10. Finished merging
11. Repeat it for all halves
*/
