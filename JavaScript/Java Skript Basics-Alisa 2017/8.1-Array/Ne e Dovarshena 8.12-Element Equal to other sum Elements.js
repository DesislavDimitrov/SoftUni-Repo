function equalSum(input) {
    let n = Number(input[0]);

    let sumMasive = 0;
    let biggestNum = Number(input[1])

    for (let i = 1; i <= n; i++) {

        let currentElement = Number(input[i]);
        sumMasive += currentElement;


    }
    
    if (sumMasive = 2 * currentElement) {
        console.log(`Yes,\nSum = ${currentElement}`);
    } else if (biggestNum > currentElement) {
        biggestNum = currentElement;

        console.log(`No, \nDiff ${Math.abs(sumMasive - biggestNum)}`);
    }



} equalSum(["7",
    "3",
    "4",
    "1",
    "1",
    "2",
    "12",
    "1"]);
