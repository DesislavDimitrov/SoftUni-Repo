function sumLeftRight(input) {

    let n = Number(input[0]);

    let leftSum = 0;
    let rightSum = 0;

    // calculate left sum
    for (let i = 1; i <= n; i++) {

        let leftCurrentNum = Number(input[i]);

        leftSum += leftCurrentNum;
    }

    for (let i = n + 1; i <= n * 2; i++) {

        let rightCurrentNum = Number(input[i]);
        rightSum += rightCurrentNum;
    }

    let sumDifference = Math.abs(rightSum - leftSum);
    if (sumDifference === 0) {
        console.log(`Yes, sum = ` + leftSum);
    } else {
        console.log(`No, diff = ` + sumDifference);
    }

    // let result = '';

    // result = (sumDifference === 0) ? `Yes, sum =  ${leftSum}` : `No, diff =  ${sumDifference}`;

    // console.log(result);
}
sumLeftRight([2,
    9,
    90,
    60,
    40,])



    