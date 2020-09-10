function biggestNumber(input) {

    let n = Number(input[0]);
    // let currentNum = 0;
    let biggestNum = input[1]; 

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input[i]);

        if (currentNum > biggestNum) {
            biggestNum = currentNum;
        }

    }
    console.log(biggestNum);
}

biggestNumber([3,
    -10,
    20,
    -30])