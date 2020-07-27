function solve(num, precision) {

    if (precision > 15) {
        precision = 15
    }

    console.log(num.toFixed(precision) * 1)
}