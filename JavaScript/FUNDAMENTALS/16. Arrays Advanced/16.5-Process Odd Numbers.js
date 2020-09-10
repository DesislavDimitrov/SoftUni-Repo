function oddPosition(input) {
    let newArray = [];

    for (let i = 0; i < input.length; i++) {

        if (i % 2 === 1) {
            let doubledIndex = input[i] * 2;
            newArray.unshift(doubledIndex);
        }
    }
    console.log(newArray.join(' '));

} oddPosition([10, 15, 20, 25]);