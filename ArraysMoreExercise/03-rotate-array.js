function solve([...arrOfStr]) {
    const rotations = -arrOfStr.pop() % arrOfStr.length;

    return [...arrOfStr.slice(rotations),...arrOfStr.slice(0, rotations)].join(' ');
}
