function iPop(arr) {

    //Remove last element
    let lastElement = arr[arr.length - 1];

    arr.length = arr.length - 1;
    //arr.length--

    return lastElement;

}
let numbers = [10, 20, 30, 40];
console.log(numbers);

let lastNumber = iPop(numbers);

console.log(lastNumber);
console.log(numbers);