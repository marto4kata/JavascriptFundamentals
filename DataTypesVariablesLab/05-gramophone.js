function solve(bandName, albumName, songName) {
    const rotations = Math.ceil((bandName.length * albumName.length) * songName.length / 5);

    return `The plate was rotated ${rotations} times.`
}
