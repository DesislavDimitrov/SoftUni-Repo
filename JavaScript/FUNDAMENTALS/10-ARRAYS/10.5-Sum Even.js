function sumEvenNum(input) {
    let evenSum = 0;

    for (let i = 0; i < input.length; i++) {
        let evenNum = Number(input[i]);
        if (evenNum % 2 === 0) {
            evenSum += evenNum;
        }

    }
    console.log(evenSum);

}
sumEvenNum(['1', '2', '3', '4', '5', '6']);