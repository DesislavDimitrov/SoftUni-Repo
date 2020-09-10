function distinctArray(array) {
    let printArray = [];

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++)

            if (array[i] === array[j]) {
                array.splice(j, 1);
                i--;
                break;

            }
    }
    console.log(array.join(' '));



} distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);