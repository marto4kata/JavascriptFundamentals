function solve([nums, ...commands]) {
  const operations = {
    'Add': (arr, newItem) => [...arr, newItem],
    'Remove': (arr, element) => arr.filter(el => el !== element),
    'RemoveAt': (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)],
    'Insert': (arr, newItem, index) => [...arr.slice(0, index), newItem, ...arr.slice(index)]
  }

  return commands.reduce((acc, command) => {
    const [operation, ...args] = command.split(' ');

    return operations[operation](acc, ...args.map(Number));
  }, nums.split(' ').map(Number)).join(' ');
}
console.log(solve(['4 19 2 53 6 43',
  'Add 3',
  'Remove 2',
  'RemoveAt 1',
  'Insert 8 3',
  'Insert 10 223']))
