function charRange(input1, input2) {

    let positionChar1 = input1.charCodeAt(0);
    let positionChar2 = input2.charCodeAt(0);

    let index = Math.abs(positionChar1 - positionChar2);
    let array = [];
    let asciOutput = [];
    let print = [];

    if (positionChar1 > positionChar2) {
        let newChar2 = positionChar2;
        for (let i = 0; i < index - 1; i++) {
            newChar2++;
            array.push(newChar2);

        }
    } else if (positionChar1 < positionChar2) {
        let newChar = positionChar1;
        for (let i = 0; i < index - 1; i++) {
            newChar++;
            array.push(newChar);

        }
        // let output = array.join(', ');
        // console.log(String.fromCharCode(output);
    }

    let newArray = [];
    for (let output of array) {
        // let printNum = String.fromCharCode(output);
        // asciOutput.push(printNum);
        // print = asciOutput.toString();
        newArray.push(String.fromCharCode(output));
    }

    console.log(newArray.join(' '))
    // console.log(print.join(' '));
}
charRange(
    'C',
    '#');