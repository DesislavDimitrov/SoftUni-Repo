function sortNumbers(numberIncom) {
    let array = [];
    while (numberIncom.length > 0) {

        let element = numberIncom.shift(0);
        if (element < 0) {
            array.unshift(element);
        } else {
            array.push(element);
        }        
    }
            for (let currentElement of array) {
            console.log(currentElement);
            }

} sortNumbers([7, -2, 8, 9]);