function solve([...commands]) {
    const arr = [];

    commands.forEach((command, index) => command === 'add' ? arr.push(index + 1) : arr.pop())

    return arr.length > 0 ? arr.join(' ') : 'Empty'
}

console.log(solve(['remove']))