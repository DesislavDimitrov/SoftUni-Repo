function arrayManipulate(input) {
    let arr = input.shift().split(' ').map(Number);
    //console.log(arr);

    for (let i = 0; i < input.length; i++) {

        let [command, firstNum, secondNum] = input[i].split(' ')
        //let arr = arr.slice()

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add':
                arr.push(firstNum);
                break;

            case 'Remove':
                arr = arr.filter(el => el !== firstNum);
                break;

            case 'RemoveAt':
                arr.splice(firstNum, 1);
                break;

            case 'Insert':
                arr.splice(secondNum, 0, firstNum)
                break;
        }
    }
    console.log(arr.join(' '));



} arrayManipulate([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);

// Write a function that manipulates an array of numbers. 
// Add {number}: add a number to the end of the array
// Remove {number}: remove number from the array
// RemoveAt {index}: removes number at a given index
// Insert {number} {index}: inserts a number at a given index
// Note: All the indices will be valid!
// Print the final state of the array (separated by single space).
// The input comes as array of strings. First element will be a string containing the array to manipulate. Every other command you receive will also be a string.
// The output is the manipulated array printed on the console on a single line, separated by space.


