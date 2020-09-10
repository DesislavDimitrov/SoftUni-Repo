function inputNumbers(numOne, numTwo, numThree) {

    let sum = sumTwoNumbers(numOne, numTwo);
    //console.log(sum);

    function sumTwoNumbers(a, b) {
        return (a + b);
    }

    let subtract = subtractSumAndNumThree(sum, numThree);
    console.log(subtract);

    function subtractSumAndNumThree(c, d) {
        return (c - d);
    }

} inputNumbers(
    42,
    58,
    100)