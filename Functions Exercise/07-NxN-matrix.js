function solve(num) {
    return [...new Array(num)].map(() => new Array(num).fill(num).join(' ')).join('\n')
}

function solve2(num) {
    return ((num + ' ').repeat(num).trim() + '\n').repeat(num).trim()
}

console.log(solve2(7))