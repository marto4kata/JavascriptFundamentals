function solve(dayType, age) {
    if (age < 0 || age > 122) {
        console.log('Error!');
        return;
    }

    const isLessThan18 = age <= 18;
    const isLessThan64 = age <= 64;

    let price = 0;

    switch (dayType) {
        case 'Weekday':
            if (isLessThan18) {
                price = 12
            } else if (isLessThan64) {
                price = 18
            } else {
                price = 12
            }
            break;
        case 'Weekend':
            if (isLessThan18) {
                price = 15
            } else if (isLessThan64) {
                price = 20
            } else {
                price = 15
            }
            break;
        case 'Holiday':
            if (isLessThan18) {
                price = 5
            } else if (isLessThan64) {
                price = 12
            } else {
                price = 10
            }
            break;
    }

    console.log(`${price}$`)
}