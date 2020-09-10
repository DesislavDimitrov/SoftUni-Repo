function sumNumber(input) {
    let n = Number(input[0]);
    let sum = 0;
    let i = 1;

    while (sum < n) {
        let currentNumber = Number(input[i]);
        sum += currentNumber;
            i++;
    }
    console.log(sum);
}
sumNumber(["100",
"10",
"20",
"30",
"40"]);