
    let arr = [];

    for (let i = n - 1; i >= 0; i--) {

        let numbers = input[i];

        arr.push(numbers);
    }
    let output = "";
    for(let y = 0; y < arr.length; y++){
        output += `${arr[y]} `;
    }
    console.log(output);
  