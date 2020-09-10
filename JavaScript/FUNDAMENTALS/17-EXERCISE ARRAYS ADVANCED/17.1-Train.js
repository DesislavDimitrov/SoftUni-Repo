function trainPassengers(input) {

    let passengerWagons = input.shift().split(' ');
    let maxCapacity = input.shift();

    for (let i = 0; i < input.length; i++) {
        let [addNewWagon, wagon] = input[i].split(' ');
        wagon = Number(wagon);

        if (addNewWagon === 'Add') {
            passengerWagons.push(wagon);
        } else {
            for (let y = 0; y < passengerWagons.length; y++) {
                if (Number(passengerWagons[y]) + Number(input[i]) <= Number(maxCapacity)) {
                    passengerWagons[y] = Number(passengerWagons[y]) + Number(input[i]);
                    break;
                }
            }
        }
    }
    console.log(passengerWagons.join(' '));

}trainPassengers(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);