function solve([rows, cols, startRow, startCol]) {
    const result = new Array(rows).fill('').map(() => new Array(cols).fill(''));

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            result[row][col] = Math.max(Math.abs(row - startRow), Math.abs(col - startCol)) + 1;
        }
    }

    result.forEach(row => console.log(row.join(' ')));
}

solve([8,8,1,3])