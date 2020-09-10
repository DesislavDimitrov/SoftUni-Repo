function processNumbers(input) {
    let array = [];

    while (input.length > 0) {
        let element = input.shift(0);

        if (element < 0) {
            array.unshift(element);
        } else {
            array.push(element);
        }
    }
    for(let currentElemen of array){
        console.log(currentElemen);
    }

} processNumbers([3, -2, 0, -1]);