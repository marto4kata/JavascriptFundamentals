function solve([target, ...thicknesses]) {
  thicknesses.forEach(thickness => {
    let cutCounter = 0;
    let lapCounter = 0;
    let grindCounter = 0;
    let etchCounter = 0;

    console.log(`Processing chunk ${thickness} microns`);

    while (thickness / 4 >= target - 1) {
      thickness /= 4;
      cutCounter++;
    }

    cutCounter && console.log(`Cut x${cutCounter}\nTransporting and washing`);

    while (thickness * 0.8 >= target - 1) {
      thickness *= 0.8;
      lapCounter++;
    }

    lapCounter && console.log(`Lap x${lapCounter}\nTransporting and washing`);

    while (thickness - 19 >= target) {
      thickness -= 20;
      grindCounter++;
    }

    grindCounter && console.log(`Grind x${grindCounter}\nTransporting and washing`);

    while (thickness - 1 >= target) {
      thickness -= 2;
      etchCounter++;
    }

    etchCounter && console.log(`Etch x${etchCounter}\nTransporting and washing`);
    thickness < target && console.log(`X-ray x1`);

    console.log(`Finished crystal ${target} microns`);
  });
}