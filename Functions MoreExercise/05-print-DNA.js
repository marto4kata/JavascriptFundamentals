function solve(length) {
  const bases = ['AT', 'CG', 'TT', 'AG', 'GG'];

  return Array.from({length}, (_, i) => {
    const j = i % 5;

    switch (i % 4) {
      case 0: return `**${bases[j]}**`
      case 1: return `*${bases[j][0]}--${bases[j][1]}*`
      case 2: return `${bases[j][0]}----${bases[j][1]}`
      case 3: return `*${bases[j][0]}--${bases[j][1]}*`
    }
  }).join('\n');
}

console.log(solve(20))