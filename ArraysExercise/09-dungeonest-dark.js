function solve([str]) {
    let health = 100;
    let coins = 0;
    let rooms = 0;
    let notDead = true;

    for (const room of str.split('|')) {
        const [item, numberStr] = room.split(' ');
        const number = parseInt(numberStr)
        rooms++;

        if (item === 'potion') {
            if (health + number > 100) {
                console.log(`You healed for ${100 - health} hp.`)
                console.log(`Current health: 100 hp.`)
                health = 100;
            } else {
                health += number;
                console.log(`You healed for ${number} hp.`)
                console.log(`Current health: ${health} hp.`)
            }
        } else if (item === 'chest') {
            coins += number;
            console.log(`You found ${number} coins.`)
        } else {
            health -= number;
            if (health <= 0) {
                notDead = false;
                console.log(`You died! Killed by ${item}.`)
                console.log(`Best room: ${rooms}`)
                break
            } else {
                console.log(`You slayed ${item}.`)
            }
        }
    }

    if (notDead) {
        console.log(`You've made it!`)
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }
}
