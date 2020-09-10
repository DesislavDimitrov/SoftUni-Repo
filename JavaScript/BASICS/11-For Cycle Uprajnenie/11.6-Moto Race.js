function race(fuel, fuelConsumption, tours) {

    fuel = Number(fuel);
    fuelConsumption = Number(fuelConsumption);
    tours = (tours);

    let outOfFuelRound = 0
    for (let i = 1; i <= tours; i++) {
        fuel -= fuelConsumption;

        if(i == 0) {
            fuelConsumption -= 0.1;
        }

        if (fuel <= 0) {
          
            break;
        } 

        outOfFuelRound++;

    }
    if(fuel <= 0){
        console.log(`You are out of fuel in round ${outOfFuelRound}!`);
    } else{
        console.log("Congrats! You won the race!");
    }

}

race("50", "4.3", "30");