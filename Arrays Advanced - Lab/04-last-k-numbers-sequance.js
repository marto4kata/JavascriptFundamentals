function solve(length, sequence) {
  return [...new Array(length - 1)]
    .reduce((arr) => [...arr, arr.slice(-sequence).reduce((a, b) => a + b, 0)], [1])
    .join(' ')
}