function evenSumOddSum(input) {
    let n = Number(input[0]);
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 1; i <= n; i++) {

        let currentNum = Number(input[i]);

        if ( i % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }

    }
    
    if (evenSum === oddSum) {
        console.log(`Yes,\nSum =  ${evenSum}`);
        
    } else {
        let sumDifference = Math.abs(evenSum - oddSum);
        console.log(`No,\nDiff = ${sumDifference}`);
    }



} evenSumOddSum([3,
    5,
    8,
    1,]);