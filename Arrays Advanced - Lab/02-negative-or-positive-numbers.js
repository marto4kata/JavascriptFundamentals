function solve(arrOfNums) {
  return arrOfNums.reduce((arr, num) => num < 0 ? [num, ...arr] : [...arr, num], []).join('\n')
}
