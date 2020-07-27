function solve([username, ...attempts]) {
    const password = [...username].reverse().join('');

    let incorrectPasswords = 0;

    attempts.forEach(attempt => {
        if (password === attempt) {
            console.log(`User ${username} logged in.`);
            return
        }

        incorrectPasswords++;

        if (incorrectPasswords === 4) {
            console.log(`User ${username} blocked!`);
            return
        }

        console.log('Incorrect password. Try again.');
    })
}

solve(['huj','luh','juh']);