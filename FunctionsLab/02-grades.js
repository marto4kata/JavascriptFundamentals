function solve(grade) {
    let word = '';

    if (grade < 3) {
        word = 'Fail'
    } else if (grade < 3.5) {
        word = 'Poor'
    } else if (grade < 4.5) {
        word = 'Good'
    } else if (grade < 5.5) {
        word = 'Very good'
    } else {
        word = 'Excellent'
    }

    return word
}