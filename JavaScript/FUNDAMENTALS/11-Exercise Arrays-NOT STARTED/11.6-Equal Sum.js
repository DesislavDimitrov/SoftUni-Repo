function equalSum(input) {
    let sumLeft = 0;
    let sumRight = 0;
    let isEqual = false;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < i; j++) {
            sumLeft += Number(input[j]);
        }
        for (let k = i + 1; k < input.length; k++) {
            sumRight += Number(input[k]);
        }
        if (sumLeft === sumRight) {
            console.log(i);
            isEqual = true;
            break;
        }
        sumLeft = 0;
        sumRight = 0;
    }
    if (isEqual === false) {
        console.log("no");
    }

} equalSum([1, 2, 3, 3]);