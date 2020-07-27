function solve(arr) {
  const sortedArr = arr.sort()

  for (let i = 0; i <= sortedArr.length - 1; i++) {
    console.log(`${i + 1}.${sortedArr[i]}`)
  }
}
