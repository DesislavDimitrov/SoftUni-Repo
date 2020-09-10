function calculator(numOne, numTwo, operator) {
    let a = numOne;
    let b = numTwo;

    switch (operator) {
        case "multiply":
            let multiply = (a, b) => numOne * numTwo;
            console.log(multiply(a, b));
            break;
        case "divide":
            let divide = (a, b) => numOne / numTwo;
            console.log(divide(a, b));
            break;
        case "add":
            let add = (a, b) => numOne + numTwo;
            console.log(add(a, b));
            break;
        case "subtract":
            let subtract = (a, b) => numOne - numTwo;
            console.log(subtract(a, b));
            break;

    }
} calculator(5,
    5,
    "multiply");