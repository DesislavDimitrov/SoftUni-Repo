function matrix(input) {
    let row = (Number(input) + ' ').repeat(input);
    let output = [];

    for (let i = 0; i < input; i++) {
        output.push(row);
    }
    for(let printArray of output){
        console.log(printArray);
    }
  

} matrix(3);