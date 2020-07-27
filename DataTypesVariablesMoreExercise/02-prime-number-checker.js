function solve(num) {
    let type = true;

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            type = false;
            break
        }
    }
    return type
}