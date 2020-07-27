function solve(people, type, weekday) {
    let price = 0;

    switch (weekday) {
        case 'Friday':
            switch (type) {
                case 'Students': price = 8.45; break;
                case 'Business': price = 10.9; break;
                case 'Regular': price = 15; break;
            }
            break;
        case 'Saturday':
            switch (type) {
                case 'Students': price = 9.8; break;
                case 'Business': price = 15.6; break;
                case 'Regular': price = 20; break;
            }
            break;
        case 'Sunday':
            switch (type) {
                case 'Students': price = 10.46; break;
                case 'Business': price = 16; break;
                case 'Regular': price = 22.5; break;
            }
            break;
    }

    let totalPrice = people * price;

    if (type === 'Students' && people >= 30) {
        totalPrice *= 0.85
    } else if (type === 'Business' && people >= 100) {
        totalPrice -= 10 * price
    } else if (type === 'Regular' && people >= 10 && people <= 20) {
        totalPrice *= 0.95
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}