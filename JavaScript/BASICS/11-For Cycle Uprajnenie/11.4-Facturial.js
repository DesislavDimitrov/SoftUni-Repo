function facturiel(input) {

    input = Number(input);

    let fact = 1;

    for (let i = 1; i <= input; i++) {
        fact *= i


    }
    console.log(fact);
}

facturiel("8");