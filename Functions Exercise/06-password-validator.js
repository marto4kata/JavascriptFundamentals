function solve(password) {
    let isValidPass = true;

    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValidPass = false;
    }

    if (!/^[A-Za-z\d]+$/.test(password)) {
        console.log('Password must consist only of letters and digits');
        isValidPass = false;
    }

    if (!/(\d){2}/g.test(password)) {
        console.log('Password must have at least 2 digits');
        isValidPass = false;
    }

    if (isValidPass) {
        console.log('Password is valid');
    }
}

solve('dhgzfs123')