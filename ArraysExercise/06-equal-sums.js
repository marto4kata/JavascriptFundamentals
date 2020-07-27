function solve(arrOfNums) {
    const index = arrOfNums.findIndex((_, i) =>
        arrOfNums.slice(0, i).reduce((sum, num) => sum + num, 0) ===
        arrOfNums.slice(i + 1).reduce((sum, num) => sum + num, 0)
    )

    if (index === -1) {
        return 'no'
    }

    return index
}