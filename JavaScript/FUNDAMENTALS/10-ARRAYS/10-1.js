function array(input) {

    let newInput = input.slice();

    let first = Number(input.shift());
    let last = Number(input.pop());
    // shift взима първия елемент а pop последния от масива. Те променяят масива!!!
    let sum = first + last;
    console.log(sum);
    console.log(input);

}
array(['20', '30', '40']);