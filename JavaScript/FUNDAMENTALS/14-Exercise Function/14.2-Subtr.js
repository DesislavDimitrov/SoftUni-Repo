function inputNumbers(numOne, numTwo, numThree) {

    let sum = sumFirstTwo (numOne, numTwo);
    //console.log(sum);

    function sumFirstTwo (a, b){
        return a + b;
    }
  
    let subtruc = subtrucSumAndThirdNum (sum, numThree);
    console.log(subtruc);

    function subtrucSumAndThirdNum(a, b){
        return a - b;
    }
} inputNumbers(
    23,
    6,
    10)