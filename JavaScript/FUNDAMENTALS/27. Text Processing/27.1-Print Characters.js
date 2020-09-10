function printWord(input) {

    // for (let i = 0; i < input.length; i++) {
    //     console.log(input[i]);
    // }


    // for (const int of input) {
    //     console.log(int);
    // }

    
input.split('').forEach(int => console.log(int));

}
printWord('AWord')