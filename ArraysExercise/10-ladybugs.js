function solve([size, indexes, ...commands]) {
    const field = initialField(size, indexes.split(' '));
    s = /\{\{\s*inline-svg\s*(?<src>"[^"]+")\s*(class\s*=\s*(?<class>"[^"]+")\s*)?(title\s*=\s*(?<title>"[^"]+")\s*)?}}/
    const directionCommands = {
        right : flyingToTheRight,
        left : flyingToTheLeft,
    }

    commands.forEach(command => {
        const [indexStr, direction, stepsStr] =  command.split(' ');
        const index = parseInt(indexStr);
        const steps = parseInt(stepsStr);

        if (field[index] !== 1) return;

        field[index] = 0;

        directionCommands[direction](field, index, steps);
    });

    return field.join(' ');

    function initialField(size, indexes) {
        const field = new Array(size).fill(0);

        indexes.forEach(x => (x in field) && (field[x] = 1));

        return field;
    }

    function flyingToTheRight (field, index, steps) {
        for (let i = index + steps; i < field.length; i += steps) {
            if (field[i] === 0) {
                field[i] = 1;
                break;
            }
        }
    }
    function flyingToTheLeft (field, index, steps) {
        for (let i = index - steps; i >= 0; i -= steps) {
            if (field[i] === 0) {
                field[i] = 1;
                break;
            }
        }
    }
}