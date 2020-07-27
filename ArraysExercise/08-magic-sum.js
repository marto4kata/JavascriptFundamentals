function solve(arrOfNums, sum) {
    arrOfNums.forEach((num, index) => {
        if (arrOfNums.includes(sum - num, index + 1)) {
            console.log(num, sum - num)
        }
    })
}

solve([-23,0,0,4,-6, 6, 2, 19, 23,+0,-0], 0)
