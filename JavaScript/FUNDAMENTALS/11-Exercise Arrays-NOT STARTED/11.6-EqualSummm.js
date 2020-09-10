function equalSum(input) {
    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < i; j++) {
            leftSum += Number(input[j]);
        }
        for (let k = i + 1; k < input.length; k++) {
            rightSum += Number(input[k])
        }
        if (leftSum === rightSum) {
            console.log(i);
            isEqual = true;
            break;
        }
        
        leftSum = 0;
        rightSum = 0;
    }
    if (isEqual === false) {
        console.log('no');
    }

}equalSum([1, 2, 3, 3])