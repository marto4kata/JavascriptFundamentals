function solve(arrOfStr) {
    const step = parseInt(arrOfStr[arrOfStr.length - 1]);
    const neededElementsArr = [];

    for (let i = 0; i < arrOfStr.length - 1; i += step) {
        neededElementsArr.push(arrOfStr[i])
    }
    return neededElementsArr.join(' ')
}
