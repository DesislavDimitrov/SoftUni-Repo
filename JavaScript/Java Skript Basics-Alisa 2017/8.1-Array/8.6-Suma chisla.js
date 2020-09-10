function sumNumbers(input) {
    let sumNumbers = 0;
    let n = input[0];

    for (let i = 1; i <= n; i++) {

        let currentNum = input[i];

        sumNumbers += currentNum;
    }
 console.log(sumNumbers);

} 
sumNumbers([4, 45, -20, 7, 11]);