function maxNum(input) {
    let isTop = true;
    let nextBigger = [];

    for (let i = 0; i < input.length; i++) {
        
        for (let y = i + 1; y < input.length; y++) {

            if (input[i] <= input[y]) {
                isTop = false;
                break;
            }
            
        }

        if (isTop) {

            nextBigger.push(input[i]);
        }
        isTop = true;
    }
    console.log(nextBigger.join(' '));


} maxNum([27, 19, 42, 2, 13, 45, 48]);