function solve([divider, ...nums]) {
  return nums.slice(0, divider).join(' ') + '\n' + nums.slice(-divider).join(' ')
}
