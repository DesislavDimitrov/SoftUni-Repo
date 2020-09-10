function sumFirstLast(numbersInput) {

    let firstElementInput = Number(numbersInput[0]);
    let lastElementInput = Number(numbersInput.pop());

    let sumElements = firstElementInput + lastElementInput;

    // console.log(sumElements);

    return sumElements;
}

sumFirstLast(['20', '30', '40']);