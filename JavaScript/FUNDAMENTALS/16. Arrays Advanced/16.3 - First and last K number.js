function kNumber(input) {
    let k = input.shift();

    let firstArray = input.slice(0, k);
    let lastArray = input.slice(input.length - k);

    let firstElement = firstArray.join(' ');
    let lastElement =  lastArray.join(' ');

    

console.log(firstElement);
console.log(lastElement);
}


kNumber([2,
    7,
    8,
    9]);