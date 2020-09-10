function houseParty(input) {
    let guests = [];

    for (let i = 0; i < input.length; i++) {

        let element = input[i].split(' ');
        let name = element[0];

        if (!element.includes('not')) {

            if (guests.includes(name)) {

                console.log(`${name} is already in the list!`);
            } else {

                guests.push(name);
            }
        } else {
            if (guests.includes(name)) {
                guests = guests.filter((guestName) => guestName !== name);

            } else {
                console.log(`${name} is not in the list!`);
            }
        }

    }

    console.log(guests.join('\n'));
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);
