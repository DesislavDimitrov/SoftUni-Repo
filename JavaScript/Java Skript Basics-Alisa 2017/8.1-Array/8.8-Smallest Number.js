function smallestNumber(input) {
    let n = Number(input[0]);

    let minNumber = Number(input[1]);

    for (let i = 1; i <= n; i++) {

        let currentNumber = Number(input[i]);

        if (currentNumber < minNumber) {
            minNumber = currentNumber;
        }
    }

    console.log(minNumber);
}
smallestNumber([3,
    -10,
    20,
    -30]);