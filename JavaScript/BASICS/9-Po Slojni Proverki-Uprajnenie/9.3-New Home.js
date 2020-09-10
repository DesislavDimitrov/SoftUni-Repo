function newHome(flower, qty, budget) {
    qty = Number(qty);
    budget = Number(budget);

    let price = 0;
    // let roses = 5;
    // let dahlias = 3.8;
    // let tulip = 2.8;
    // let narcissus = 3
    // let Gladiola = 2.5

    switch (flower) {
        case "Roses":
            price = qty * 5;
            if (qty >= 80) {
                price = price * 0.9;
            }
            break;
        case "Dahlias":
            price = qty * 3.8;
            if (qty >= 80) {
                price = price * 0.85;
            }
            break;
        case "Tulips":
            price = qty * 2.8;
            if (qty >= 80) {
                price = price * 0.85;
            }
            break;
        case "Narcissus":
            price = qty * 3;
            if (qty < 120) {
                price = price * 1.15;
            }
            break;
        case "Gladiolus":
            price = qty * 2.5;
            if (qty < 80) {
                price = price * 1.2;
            }
            break;

    }

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${qty} ${flower} and ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }
}

newHome("Narcissus",
119,
360)
