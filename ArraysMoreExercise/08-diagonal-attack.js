function solve(array) {
    const matrix = array.map(str => str.split(' '));

    const sum = arr => arr.reduce((a, b) => a + parseInt(b), 0);

    const diagonal1Sum = sum(matrix.map((arr, index) => arr[index]));
    const diagonal2Sum = sum(matrix.map((arr, index) => arr[arr.length - 1 - index]));

    return diagonal1Sum === diagonal2Sum
        ?
        matrix
            .map((arr, index) => arr
                .map((num, i) => i === index || i === arr.length - 1 - index ? num : arr[i] = diagonal1Sum)
                .join(' ')
            )
            .join('\n')
        :
        matrix
            .map(arr => arr
                .join(' ')
            )
            .join('\n')
}

solve([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
])