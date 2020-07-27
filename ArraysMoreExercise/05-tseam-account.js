function solve([gamesStr, ...arr]) {
    const commands = arr.slice(0, arr.indexOf('Play!'));
    const games = gamesStr.split(' ');

    const possibleCommands = {
        Install: (games, game) => games.includes(game) ? games : [...games, game],
        Uninstall: (games, game) => games.filter(x => x !== game),
        Update: (games, game) => games.includes(game) ? [...games.filter(x => x !== game), game] : games,
        Expansion: (games, gameExpansion) => {
            const [game, expansion] = gameExpansion.split('-');

            if (!games.includes(game)) return games;

            const index = games.indexOf(game) + 1;

            return [
                ...games.slice(0, index),
                `${game}:${expansion}`,
                ...games.slice(index),
            ]
        },
    }

    return commands.reduce((result, command) => {
        const [comm, game] = command.split(' ');

        return possibleCommands[comm](result, game);
    }, games).join(' ');
}
