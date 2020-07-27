function solve(arr, num) {
    const rotations = num % arr.length

    return [...arr.slice(rotations), ...arr.slice(0, rotations)].join(' ')
}
