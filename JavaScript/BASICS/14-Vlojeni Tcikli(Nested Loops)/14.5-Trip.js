function trip(input) {

    let destination = input[0];
    let minBudget = Number(input[1]);
    let savings = Number(input[2]);
    let enough = 0;



    for (let i = savings; i >= minBudget; i++) {

        saving++;
        console.log(`Going to ${destination}`);



    }



}

trip(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);