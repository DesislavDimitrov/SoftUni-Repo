function solve(trip, puzzle, doll, bear, minion, truck) {
    trip = Number(trip);
    puzzle = Number(puzzle);
    doll = Number(doll);
    bear = Number(bear);
    minion = Number(minion);
    truck = Number(truck);
    
    let puzzleprice = (puzzle * 2.6);
    let dollprice = (doll * 3);
    let bearprice = (bear * 4.1);
    let minionprice = (minion * 8.2);
    let truckprice = (truck * 2);

    let orderedtoys = (puzzle + doll + bear + minion + truck);

    let earnprice = (puzzleprice + dollprice + bearprice + minionprice + truckprice);


    let totalearn;
    if (orderedtoys > 50) {

        earnprice = (earnprice * 0.75);
    }

    totalearn = (earnprice * 0.9);


    if (totalearn >= trip) {

        let freemoney = (totalearn - trip);
        console.log(`Yes! ${freemoney.toFixed(2)} lv left.`);

    } else {
        let notEnough = (trip - totalearn);
        console.log (`Not enough money! ${notEnough.toFixed(2)} lv needed.`);
    }

}
solve("320", "8", "2", "5", "5", "1")