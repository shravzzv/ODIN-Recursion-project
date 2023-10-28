/* Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13]. */

const fibs = (n) => {
  if (n <= 0) return 'Argument must be atleast 1'
  if (n < 2) return [0]

  let result = [0, 1]
  for (let i = 3; i <= n; i++) {
    let c = result[result.length - 2] + result[result.length - 1]
    result.push(c)
  }
  return result
}

console.log(fibs(8))

const fibsRec = (n) => {
  return n <= 0
    ? 'Argument must be atleast 1'
    : n === 1
    ? [0]
    : n === 2
    ? [0, 1]
    : [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]]
}

console.log(fibsRec(8))
