function solve(distance, passengers, literPrice) {
    return  `Needed money for that trip is ${(distance / 100 * 7 + passengers * 0.1) * literPrice}lv.`;
}