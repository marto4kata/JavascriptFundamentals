function solve(fights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    const brokenHelmets = Math.trunc(fights / 2);
    const brokenSwords = Math.trunc(fights / 3);
    const brokenShields = Math.trunc(fights / 6);
    const brokenArmor = Math.trunc(brokenShields / 2);

    const totalPrice = brokenHelmets * helmetPrice + brokenSwords * swordPrice + brokenShields * shieldPrice + brokenArmor * armorPrice;

    return `Gladiator expenses: ${totalPrice.toFixed(2)} aureus`
}
