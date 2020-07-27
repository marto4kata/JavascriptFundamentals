function solve(num) {
    return `${num} Amazing? ` + (([...num.toString()]
        .reduce((sum, digit) => sum + parseInt(digit), 0)
        .toString()
        .includes('9')) ? 'True': 'False');
}
