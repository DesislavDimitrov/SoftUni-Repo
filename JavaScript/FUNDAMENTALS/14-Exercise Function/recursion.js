function matrix(input) {
    return recursiveAdd([[input]], input);
}

function recursiveAdd(array, maxSize) {
    if (array.length === maxSize) {
        return array;
    }
    
    for (let row of array) {
        row.push(maxSize);
    }

    // array.push(maxSize.toString()
    //                       .repeat(array[0].length)
    //                       .split("")
    //                       .map(Number));
    array.push(array[0].slice());

    return recursiveAdd(array, maxSize);
}

console.table(matrix(3))


// let sortedArray = [1, 3, 5, 8, 10, 14, 16, 19, 25, 29];

// function contains(array, num) {
    
// }
