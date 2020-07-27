function solve(arrOfNums) {
    let maxStreak = 0;
    let streak = 1;
    let elementOfMaxStreak = '';

    arrOfNums.forEach((el, i) => {
        if (el === arrOfNums[i - 1]) {
            streak++;

            if (streak > maxStreak) {
                maxStreak = streak;
                elementOfMaxStreak = el
            }
        } else {
            streak = 1;
        }
    })

    return new Array(maxStreak).fill(elementOfMaxStreak).join(' ')
}

console.log(solve([]))