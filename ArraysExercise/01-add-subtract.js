function solve(arrOfNums) {
    const newArr = arrOfNums.map((el, i) => el % 2 === 0 ? el + i : el - i);

    console.log(newArr)
    console.log(arrOfNums.reduce((sum, num) => sum + parseInt(num, 10), 0))
    console.log(newArr.reduce((sum, num) => sum + parseInt(num, 10), 0))
}