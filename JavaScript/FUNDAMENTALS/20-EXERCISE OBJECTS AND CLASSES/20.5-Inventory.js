function heroInventory(input) {
    const heroes = [];
    input.forEach(line => {
        const data = line.split(" / ");
        const name = data[0];
        const level = Number(data[1]);
        const items = data[2].split(", ").sort((a,b) => a.localeCompare(b));

        heroes.push({name, level, items});
    })
    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(", ")}`);
    })

}

heroInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])


//     Hero: Hes
// level => 1 
// items => Antara, Desolator, Sentinel
// Hero: Derek
// level => 12
// items => BarrelVest, DestructionSword
// Hero: Isacc
// level => 25
// items => Apple, GravityGun