function eqArrays(array1, array2) {
    let sumFirst = 0;
    let sumSecond = 0;
    let areEqual = true

    for (let i = 0; i < array1.length; i++) {
        let numbersArray1 = Number(array1[i]);
        sumFirst += numbersArray1;
    }

    // for (let y = 0; y < array2.length; y++) {
    //     let numbersArray2 = Number(array2[y]);
    //     sumSecond += numbersArray2;
    // }

    // if (sumFirst - sumSecond === 0) {
    //     console.log(`Arrays are identical. Sum: ${sumFirst}`);
    // }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }
    if(areEqual){
        console.log(`Arrays are identical. Sum: ${sumFirst}`)
    }
}
eqArrays(['10', '20', '30'], ['10', '30', '20']);