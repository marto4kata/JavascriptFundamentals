function solve(generalArr) {
    const rowsSums = [];

    generalArr.forEach(arr => {
        rowsSums.push(arr.reduce((sum, num) => sum + num, 0))
    })

    const columnsSums = [];

    for (let i = 0; i <= generalArr[0].length - 1; i++) {
        let sumOfColumn = 0

        generalArr.forEach(arr => {
            sumOfColumn += arr[i]
        })

        columnsSums.push(sumOfColumn)
    }

    return rowsSums.every(num => num === rowsSums[0]) && columnsSums.every(num => num === columnsSums[0])
}
solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])


function solve(arrOfArrays) {
    return checkMagic(arrOfArrays) && checkMagic(rotate(arrOfArrays));

    function rotate(b) {
        return b.map((_, i) => b.map(({[i]: num}) => num));
    }

    function checkMagic(a) {
        return a.map(x => x.reduce((a, b) => a + b, 0)).every((num, _, [first]) => num === first);
    }
}