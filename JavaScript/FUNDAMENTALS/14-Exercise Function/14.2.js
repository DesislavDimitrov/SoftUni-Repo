function addSubtract(numA, numB, numC) {

    let sum = sumTwoNums(numA, numB);
    //console.log(sum);

    function sumTwoNums(a, b) {
        return a + b;
    }

    let subtract = subtractSumAndNumC(sum, numC);
    console.log(subtract);
    function subtractSumAndNumC(a, b){
        return a - b;
    }


}
addSubtract(
    23,
    6,
    10
)