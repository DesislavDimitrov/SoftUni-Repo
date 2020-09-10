function processOddNum(input){

    let array = input.slice();

    let oddNumbers = array.filter((num, i) => i % 2 == 1);
    let doubledOddNumbers = oddNumbers.map(x => x * 2);
    let result = doubledOddNumbers.reverse();

    console.log(result.join(' '));

}processOddNum([10, 15, 20, 25]);