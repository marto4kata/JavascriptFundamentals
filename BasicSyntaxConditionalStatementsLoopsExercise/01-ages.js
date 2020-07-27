function solve(age) {
    let type = '';

    if (age < 0){
        type = 'out of bounds'
    }else if (age <= 2) {
        type = 'baby'
    } else if (age <= 13) {
        type = 'child'
    } else if (age <= 19) {
        type = 'teenager'
    } else if (age <= 65) {
        type = 'adult'
    } else {
        type = 'elder'
    }

    console.log(type)
}
