function solve(arrOfNums) {
    let currMaxNumber = -Infinity;

    return arrOfNums
        .reverse()
        .filter(num => {
            const isBigger = num > currMaxNumber;

            if (isBigger) {
                currMaxNumber = num;
            }

            return isBigger;
        })
        .reverse()
        .join(' ');
}
