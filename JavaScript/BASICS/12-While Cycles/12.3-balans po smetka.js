function ballance(input) {

    let i = 1;
    let sum = 0;
    let deposit = input[0];


    while (deposit !== "NoMoreMoney") {
        let amount = Number(deposit);
        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        }

        sum += amount;
        console.log(`Increase: ${sum.toFixed(2)}`);
        deposit = input[i];
        i++

    }
    console.log(`Total: ${sum.toFixed(2)}`);

}
ballance(["5.51", 
"69.42",
"100",
"NoMoreMoney"]);