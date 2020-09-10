function kNumbers(input){

    let k = input.shift(0);

    let firstNumbers = input.slice(0, k).join(' ');
    let lastNumbers = input.slice(input.length - k).join(' ');

    console.log(firstNumbers);
    console.log(lastNumbers);

}kNumbers([2, 7, 8, 9])