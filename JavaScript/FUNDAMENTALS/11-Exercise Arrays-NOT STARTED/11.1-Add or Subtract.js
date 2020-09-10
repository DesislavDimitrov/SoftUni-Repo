function addOrSub(input) {

    let output = [];
    let sum = 0;
    let newSum = 0;
    let oldSum = 0;

    for (let i = 0; i < input.length; i++) {
        let number = Number(input[i]);

        if (number % 2 === 0) {
            sum = (number + i);
        } else {
            sum = (number - i);
        }
        output.push(sum);
    }
    console.log(output);

    for (let totalSum1 of input) {
        oldSum += totalSum1;
    }

    for (let totalSum2 of output) {
        newSum += totalSum2;
    }
    console.log(oldSum);
    console.log(newSum);
}
addOrSub([-5, 11, 3, 0, 2]);