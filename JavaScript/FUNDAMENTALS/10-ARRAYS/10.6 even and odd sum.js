function evOdSum(input) {
    let evenSum = 0;
    let oddSum = 0;
    let total = 0;
    for (let even of input) {
        if (even % 2 === 0) {
            evenSum += even;
        }
    }
    for(let odd of input){
        if (odd % 2 === 1){
            oddSum += odd;
        }
    }
    total = evenSum - oddSum;
    console.log(total);

}
evOdSum([1,2,3,4,5,6]);