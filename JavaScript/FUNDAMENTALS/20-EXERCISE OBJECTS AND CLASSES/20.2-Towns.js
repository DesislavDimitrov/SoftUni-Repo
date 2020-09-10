function objects(input) {


    input.forEach(line => {
        const info = line.split(' | ');
        const town = {
            town: info[0],
            latitude: Number(info[1]).toFixed(2),
            longitude: Number(info[2]).toFixed(2)
        }
        console.log(town)
    });

    

}
objects(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])


    // class Town {
    //     constructor(town, latitude, longitude) {
    //         this.town = town
    //         this.latitude = latitude
    //         this.longitude = longitude
    //     }

    // }

    // let towns = {}

    // for (let i = 0; i < input.length; i++) {

    //     let townData = input[i].split(' | ');

    //     let [town, latitude, longitude] = townData;

    //     let townZ = new Town(town, Number(latitude), Number(longitude));

    //     towns.push(townZ);
    //     console.log(towns);
    // }