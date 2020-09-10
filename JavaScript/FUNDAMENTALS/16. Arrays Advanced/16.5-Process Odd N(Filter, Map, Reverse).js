function processOdd(arr){
let result = arr;

let numbers = result.filter( (num, i) => i % 2 == 1);
let doubleNumbers = numbers.map(x => x * 2);
let reversedNumbers = doubleNumbers.reverse();
console.log(numbers);
console.log(doubleNumbers);
console.log(reversedNumbers.join(' '));


}processOdd([3, 0, 10, 4, 7, 3])