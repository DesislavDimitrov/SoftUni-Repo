function solveElement(numbers) {

    let newArrey = [];
    

    while (numbers.length > 0) {

        let currentElement = numbers.shift();

        if (currentElement > 0) {
            newArrey.unshift(currentElement);
        } else {
            newArrey.push(currentElement);
        }

    }

    for (const number of newArrey) {
        console.log(number);
    }
}
numbers([7, -2, 8, 9]);