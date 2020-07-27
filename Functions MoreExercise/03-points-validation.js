function solve([x1, y1, x2, y2]) {
  function isInteger(num) {
    return Number.isInteger(num) ? 'valid' : 'invalid'
  }

  function findDistance(x, y) {
    return Math.sqrt(x ** 2 + y ** 2)
  }

  return `{${x1}, ${y1}} to {0, 0} is ${isInteger(findDistance(x1, y1))}\n` +
    `{${x2}, ${y2}} to {0, 0} is ${isInteger(findDistance(x2, y2))}\n` +
    `{${x1}, ${y1}} to {${x2}, ${y2}} is ${isInteger(findDistance(x1 - x2, y1 - y2))}`
}
