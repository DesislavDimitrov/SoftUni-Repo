function bigNum(input) {
    let i = 0;
    let inElement = input[0];
    
    let max = Number.MIN_SAFE_INTEGER;


    while (inElement !== "Stop") {
        let num = Number(inElement);

        if (num > max) {
            max = num;
        }
        inElement = input[i];
        i++;
    }
    console.log(max);


}

bigNum(["45",
"-20",
"7",
"99",
"Stop"]);