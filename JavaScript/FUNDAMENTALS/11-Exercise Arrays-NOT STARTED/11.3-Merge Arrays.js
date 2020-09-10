function mergeArrays(arr1, arr2) {

    let newArray = [];
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {

        if (i % 2 === 0) {
            newArray[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            newArray[i] = `${arr1[i]}${arr2[i]}`;
        }

    }
    let output = newArray.join(' - ');
    console.log(output);

} mergeArrays(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);