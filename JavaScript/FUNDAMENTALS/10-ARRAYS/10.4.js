function revArray(input) {

    let arr = [];
    let output = "";

    for (let i = input.length - 1; i >= 0; i--) {

        let swap = input[i];
        output += swap + " ";
        

    }
    console.log(output);



} revArray(['abc', 'def', 'hig', 'klm', 'nop']);