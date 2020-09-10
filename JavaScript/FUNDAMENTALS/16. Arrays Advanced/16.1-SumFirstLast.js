function sumNumbers(input){

let firstNum = Number(input[0]);
let lastNum = Number(input.pop(input.length - 1));

let sumFirstLast = firstNum + lastNum;

console.log(sumFirstLast);

}sumNumbers(['5', '10']);